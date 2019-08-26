import * as Enzyme from 'enzyme';
export const findByTestAttr = (wrapper:Enzyme.ShallowWrapper, val:string) => {
  return wrapper.find(`.${val}`);
};