import { updateCar } from '../../services/update/update-car';
import { renderGarage } from '../../templates/garage/garage-container';
import { page } from '../../utils/page';

export function updateCarListener(optionsContainer: HTMLDivElement, id: string) {
  const updateCarText = optionsContainer.querySelector('.update-car__text') as HTMLInputElement;
  const updateCarColor = optionsContainer.querySelector('.update-car__color') as HTMLInputElement;
  const updateCarBtn = optionsContainer.querySelector('.update-car__submit') as HTMLInputElement;

  updateCarBtn.onclick = async (event) => {
    event.preventDefault();

    const textValue = updateCarText.value;
    const colorValue = updateCarColor.value;

    if (textValue.length > 0) {
      await updateCar(id, textValue, colorValue);
      await renderGarage(String(page.pageNumber));
    }
  };
}

export function updatePreventDefault(optionsContainer: HTMLDivElement) {
  const updateCarBtn = optionsContainer.querySelector('.update-car__submit') as HTMLInputElement;

  updateCarBtn.addEventListener('click', (event) => {
    event.preventDefault();
  });
}
