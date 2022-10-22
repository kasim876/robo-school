import { createPopper } from '@popperjs/core';

const tooltipBtn = document.querySelector(".tooltip__btn");
const tooltip = document.querySelector(".tooltip__text");

createPopper(tooltipBtn, tooltip, {
  placement: 'top-start',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 10],
      },
    },
  ],
})