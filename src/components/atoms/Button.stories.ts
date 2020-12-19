import Button from './Button.vue'

export default {
  title: 'Components/Atoms/Button',
  component: Button,
}

// @ts-ignore
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props" />',
})

export const Primary = Template.bind({})
// @ts-ignore
Primary.args = {
  primary: true,
  label: 'Button',
}
