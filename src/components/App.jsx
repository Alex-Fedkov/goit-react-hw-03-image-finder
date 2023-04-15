import { Component } from "react";
import Button from "./Button/Button";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import axios from "axios";
import Modal from "./Modal/Modal";

const ApiKey = '33796179-09372d9b13f9947ab69ebb690';
const PICTURES_IN_PAGE = 12;

class App extends Component {
  state = {
    searchQuery: "",
    isLoading: false,
    images: [],
    currentPage: 1,
    totalPages: 0,
    showImageId: null,
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getPictures();
    }
  }

  getPictures = () => {
    this.setState({ isLoading: true });

    // const images = await fetchPictures(searchQuery);
    const url = `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.currentPage}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=${PICTURES_IN_PAGE}`;
    axios(url).then(response => {
      //console.log('response', response);
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      this.setState(prevState => ({ 
        currentPage: prevState.currentPage + 1,
        totalPages: Math.ceil(response.data.totalHits / PICTURES_IN_PAGE),
        images: [ ...prevState.images, ...response.data.hits]
      }));
    }).finally(() => this.setState({ isLoading: false }));
  }
  

  onSubmitSearch = (searchQuery) => {
    this.setState({ 
      searchQuery,
      images: [],
      currentPage: 1,
      totalPages: 0,
    });
  }

  onImageClick = imageId => {
    this.setState({ showImageId: imageId });
  }

  onCloseModal = () => {
    this.setState({ showImageId: null });
  }

  escFunction = (event) => {
    if (!this.state.showImageId) {
      return;
    }

    if (event.key === "Escape") {
      this.onCloseModal();
    }
  }

  render () {
    const { images, isLoading, currentPage, totalPages, showImageId } = this.state;
    const image = images.find(({ id }) => id === showImageId);
    return (
      <div>
        <Searchbar onSubmit={this.onSubmitSearch} />
        <ImageGallery images={images} onImageClick={this.onImageClick} />
        {!isLoading && currentPage < totalPages && <Button onClick={this.getPictures} />}
        {isLoading && <Loader />}
        {showImageId && <Modal image={image} onClose={this.onCloseModal} />}
      </div>
    );
  }
};

export default App;