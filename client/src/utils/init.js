export const generateInputList = (name, placeholder) => ({
  className: `${name}-input`,
  type: "text",
  id: `${name}`,
  text: placeholder.charAt(0).toUpperCase() + placeholder.slice(1),
  placeholder: placeholder.charAt(0).toUpperCase() + placeholder.slice(1),
});
