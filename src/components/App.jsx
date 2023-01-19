import { Component } from "react"
import {Searchbar} from "./Searchbar/Searchbar"
import {ImageGallery} from "./ImageGallery/ImageGallery"
import {Button} from "./Button/Button"
import {Loader} from "./Loader/Loader"
import { getPixabayImages } from "services/api"
import css from "../components/styles.css"


export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    totalHits: null,
    largeImageURL: '',
    isLoading: false,
    error: null,
  }

  handleSubmit = query => {
    this.setState({ query, page: 1 });
  };

async componentDidUpdate(_, prevState) {
  if (
    prevState.query !== this.state.query ||
    prevState.page !== this.state.page
  ) {
    this.setState({
      isLoading: true,
    });
    try {
      const { hits, totalHits } = await getPixabayImages(
        this.state.query,
        this.state.page
      );

      if (hits.length === 0) {
        this.setState({ error: 'error', images: [] });
        return;
      }

      this.setState(prevState => ({
        images: this.state.page === 1 ? hits : [...prevState.images, ...hits],
        totalHits: totalHits,
        error: null,
      }));
    } catch (error) {
      this.setState({
        error: error,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }
}

handleLoadMore = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }));
};

  render(){
    return(
      
      <div className={css.App}>
      <Searchbar onSubmit={this.handleSubmit} />
      <ImageGallery images={this.state.images} />
      {this.state.isLoading && <Loader />}
      {this.state.totalHits > this.state.images.length && <Button onLoadMore={this.handleLoadMore} />}
      </div>
    
    )
  }
};
