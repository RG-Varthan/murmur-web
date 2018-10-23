import React from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { PostMurmur } from './Scatter';
const IPFS = require('ipfs-api');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

class FormsPage extends React.Component  {

    state = {
        ipfsHash:null,
        buffer:'',
        murmur: '',  
    };

    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
    };

    convertToBuffer = async(reader) => {
        const buffer = await Buffer.from(reader.result);
        this.setState({buffer});
    };

    updateText(evt) {
        this.setState({
            murmur: evt.target.value
        });
      }

    onSubmit = async (event) => {
        // console.log(this.state.murmur)
        event.preventDefault();

        if(this.state.buffer !== '' && this.state.murmur !== '')
        {
          await ipfs.add(this.state.buffer, (err, ipfsHash) => {
              console.log(err,ipfsHash);
              this.setState({ ipfsHash:ipfsHash[0].hash });
              // console.log(this.state.ipfsHash)
              PostMurmur( this.state.murmur, this.state.ipfsHash );
          });
        }
        else
        {
          if(this.state.murmur === '')
            alert("Please Fill the Murmur Field")
          else
            alert("Please Choose the File to upload")
        }

    }; 

  render() {
    return(
      <Container>
        <Row style={{marginTop:30}}>
            <Col md="3"></Col>
          <Col md="6">
            
                <form onSubmit={this.onSubmit}>
                  <p className="h4 text-center py-4">Create Murmur</p>
                  <div className="grey-text">
                    <Input type="textarea" label="Enter Your murmur" value={this.state.murmur} onChange={evt => this.updateText(evt)} />
                    <Input group type="file" onChange = {this.captureFile}/>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button color="cyan" type="submit">Create</Button>
                  </div>
                </form>
              
          </Col>
          <Col md="3"></Col>
        </Row>
      </Container>
    );
  }
};

export default FormsPage;