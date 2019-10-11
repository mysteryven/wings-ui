import * as React from "react";
import validator from './validator';
import {Row, Col} from '../grid';
import Input from '../input';
import {ChangeEventHandler, CSSProperties, FormEvent, ReactElement} from "react";
import './index.scss';

export interface FormValue {
  [K: string]: any
}

export interface FormRule {
  [K: string]: any;
  message: string
}

export interface FormErrors {
  [K: string]: string[];
}

interface FormItemCol {
  span?: number,
  style?: CSSProperties
}

interface FormLayout {
  labelCol?: FormItemCol,
  wrapperCol?: FormItemCol,
  style?: CSSProperties
}

export interface FormField {
  key: string;
  label?: string;
  formItem: { type: string, item?: ReactElement<any> };
  rules?: Array<FormRule>;
}

interface IProps {
  values: FormValue;
  fields: Array<FormField>;
  onSubmit?: (values: FormValue, e:FormEvent) => void;
  onChange?: (values: FormValue, errors: FormErrors) => void;
  validateErrors?: () => void;
  formLayout?: FormLayout,
  formItemStyle?: 'google' | 'grid'
}

interface FormItem {
  type: string
  item: ReactElement<any>,
  value: any,
  onChange: ChangeEventHandler<HTMLElement>
}

const Form: React.FunctionComponent<IProps> = props => {
  const { fields, values, onSubmit, onChange } = props;

  const onFormItemChange = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = { ...values, [key]: e.target.value };
    const errors = validator(fields, values);
    onChange && onChange(newValues, errors);
  };

  let labelCol: FormItemCol | undefined = {};
  let wrapperCol: FormItemCol | undefined = {};
  let rowStyle: CSSProperties | undefined = {};

  if (props.formLayout) {
    labelCol = props.formLayout.labelCol;
    wrapperCol = props.formLayout.wrapperCol;
    rowStyle = props.formLayout.style;
  }

  const renderFormItem = (itemProps: FormItem) => {
    const {item, ...restItemProps} = itemProps;
    return itemProps.type !== 'none' ?
      <Input
        className="w-form-item"
        {...restItemProps}
      /> :
      React.cloneElement(item, {
        type: item.props.type || 'text',
        value: itemProps.value,
        onChange: itemProps.onChange
      });
  };

  const renderGridStyleItems = () => fields.map(f => {
    const item = f.formItem.item as ReactElement<any>;
    const itemProps = {
      type: f.formItem.type,
      item,
      value: values[f.key] || '',
      onChange: onFormItemChange.bind(null, f.key)
    };

    if (f.formItem.type === 'none') {
      return (
        <Row key={f.key} style={rowStyle}>
          <Col className="w-form-wrapper" {...wrapperCol}>
            {renderFormItem({ ...itemProps, item })}
          </Col>
        </Row>
      );
    }
    return (
      <Row key={f.key} style={rowStyle}>
        <Col className="w-form-label" {...labelCol}>{`${f.label}：`}</Col>
        <Col className="w-form-wrapper" {...wrapperCol}>
          {renderFormItem(itemProps)}
        </Col>
      </Row>
    );
  });

  const renderGoogleStyleItems = () => fields.map(f => {
    const item = f.formItem.item as ReactElement<any>;
    const itemProps = {
      type: f.formItem.type,
      item,
      value: values[f.key] || '',
      onChange: onFormItemChange.bind(null, f.key)
    };

    if (f.formItem.type !== 'none') {
      return (
        <div key={f.key} className="w-google-style-input-wrapper w-form-item" style={rowStyle}>
          <Input
            className="w-google-style-input"
            type={f.formItem.type}
            value={values[f.key]}
            onChange={onFormItemChange.bind(null, f.key)}
            placeholder={f.label}
          />
          <label className="w-google-style-label">{f.label}</label>
        </div>
      )
    }
    return (
      <div key={f.key} className="w-google-style-input-wrapper w-form-item" style={rowStyle}>
        <Row key={f.key} style={rowStyle}>
          <Col className="w-form-wrapper" {...wrapperCol}>
            {renderFormItem({ ...itemProps, item })}
          </Col>
        </Row>
      </div>
    )
  });

  const onSubmitClick = (e:FormEvent) => {
    e.preventDefault();
    onSubmit && onSubmit(values, e)
  };

  return (
    <form className="w-form" onSubmit={onSubmitClick}>
      {props.formItemStyle !== 'google' ? renderGridStyleItems() : renderGoogleStyleItems()}
    </form>);
};

Form.defaultProps = {
  formLayout: {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 12
    }
  }
};

export default Form;