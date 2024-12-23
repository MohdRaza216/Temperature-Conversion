```markdown
# Temperature Conversion Program

A simple web application that converts a given temperature between three units: Celsius (°C), Fahrenheit (°F), and Kelvin (K). The user can input a temperature value and select its unit, and the program will automatically convert it to all other units. The application also provides a history of conversions and allows users to clear the history.

## Features

- **Temperature Conversion**: Converts the input temperature between Celsius, Fahrenheit, and Kelvin.
- **Unit Selection**: The user selects the input unit (Celsius, Fahrenheit, or Kelvin) and the corresponding conversion is performed.
- **Conversion History**: All conversions are saved in a history table, including the original temperature, input unit, and the converted values.
- **Clear History**: Users can clear the entire conversion history.
- **Responsive Design**: The application is mobile-friendly and works well on different screen sizes.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone (https://github.com/MohdRaza216/Temperature-Conversion.git)
   ```

2. Navigate to the project folder:

   ```bash
   cd Temperature-Conversion
   ```

3. Open the `index.html` file in your browser to use the application.

## Usage

1. **Enter a temperature** in the input field.
2. **Select the input unit** (Celsius, Fahrenheit, or Kelvin).
3. **Click the "Convert" button** to see the converted values in all units (Celsius, Fahrenheit, and Kelvin).
4. **View the conversion history** below the result section.
5. You can **clear the history** by clicking the "Clear History" button.

### Example

- If you input `100` and select **Celsius**, the application will display the converted values:
  - Celsius: 100.00 °C
  - Fahrenheit: 212.00 °F
  - Kelvin: 373.15 K

## Technologies Used

- **HTML5**: For the structure and layout of the application.
- **CSS3**: For styling the form, results, and history table. The design is responsive and uses flexbox.
- **JavaScript**: For the temperature conversion logic, handling form submissions, and managing the conversion history.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was created for educational purposes as part of a personal temperature conversion tool.
