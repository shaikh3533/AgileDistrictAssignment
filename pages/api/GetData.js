import axios from 'axios';


class GetData {
  constructor() {
    this.result = [];
  }


  ImagesData = () => {
    const res = async () => {
      const resp = await axios
        .get("https://pixabay.com/api/?key=27629987-e88691c6c24eacd17769fb886&_type=photo")
        .catch(function (error) {
          console.log(error);
        });
      return resp;
    };
    return res();
  };

}

export default new GetData()