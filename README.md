# PhotoFolio

PhotoFolio is an online photo album React app that allows users to upload, organize, and share their digital photos.

## Goal

Develop an Online Photo Album (PhotoFolio) that allows users to upload, organize, and share their digital photos.

## Live Demo

A live demo of PhotoFolio is available [here](#).

## Functionalities

- **Maintain Images by Category**: Users can organize images by category in various albums.
- **Save, Preview, and Download Images**: Users have options to save, preview, and download images.
- **User-Friendly Design**: The application features a visually appealing design that encourages users to explore and use the platform regularly.

## Technologies

- React

## Getting Started

To get started with PhotoFolio, follow these steps:

1. Clone the repository:
   
    ```bash
    git clone https://github.com/your-username/photofolio.git
    ```

2. Install dependencies:
   
    ```bash
    cd photofolio
    npm install
    ```

3. Set up Firestore:
   
    - Create and initialize a new Firestore for the PhotoFolio app.
    - Include Firestore configuration inside the project.

4. Run the development server:
   
    ```bash
    npm start
    ```

## Usage

1. **Albums List Component**: Displays a list of albums. Retrieves all albums from the database and saves them in the state.
   
2. **AlbumForm Component**: Adds a new album to the database. Features a form heading, an input field for the album name, and clear and submit buttons.

3. **Images List Component**: Displays all images inside an album. Retrieves all images in the selected album from the database and saves them in the state. Conditionally renders if an album is selected.

4. **ImageForm Component**: Adds or updates images in the database. Features a form heading, input fields for the image title and image URL, and clear submit buttons.

5. **Carousel Component**: Shows images inside the selected album in a modal window with next, previous, and close buttons. Rendered conditionally.

## Additional Functionality

- **Search Input Field**: Filters images inside the Images List component locally.
- **Back Button**: Renders the Albums List component from the Images List component.
- **Dynamic Classes**: Buttons render with different styles.
- **Prefill ImageForm**: Prefills image data when the edit button is clicked.
- **Conditional Rendering**: Shows absence of data and loading state using the react-spinner-material library.
- **Toast Messages**: Shows toast messages for async actions and error conditions using the react-toastify library.

## Contributing

Contributions are welcome! Please feel free to submit a pull request with your enhancements.

## License

This project is licensed under the [MIT License](LICENSE).
