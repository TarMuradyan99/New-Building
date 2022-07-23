
import './App.css';
import Wrapper from './Components/Wrapper/Wrapper';
import Card from './Components/Card/Card';
import classes from './Ui/Global.module.css';
import Table from './Components/Table/Table';
import Trrow from './Components/Trrow/Trrow'
import Tdcells from './Components/Tdcells/Tdcells';
import Tbody from './Components/Tbody/Tbody'
import Textitem from './Components/Textitem/Textitem';

const App = () => {

  return (
  <Wrapper>
   <Card className={classes.conteiner}>
      <Table className={classes.floors}>
      <Tbody className={classes.thirdfloors}>

      <Trrow className={classes.thirdrows}>
          <Tdcells className={classes.cells}>10.1</Tdcells>
          <Tdcells className={classes.cells}>10.2</Tdcells>
          <Tdcells className={classes.cells}>10.3</Tdcells>
          <Tdcells className={classes.cells}>10.4</Tdcells>
          <Tdcells className={classes.cells}>10.5</Tdcells>
        </Trrow>
        <Trrow className={classes.thirdrows}>
          <Tdcells className={classes.cells}>9.1</Tdcells>
          <Tdcells className={classes.cells}>9.2</Tdcells>
          <Tdcells className={classes.cells}>9.3</Tdcells>
          <Tdcells className={classes.cells}>9.4</Tdcells>
          <Tdcells className={classes.cells}>9.5</Tdcells>
        </Trrow>
        </Tbody>
      <Tbody className={classes.secondfloors}>
       
        <Trrow className={classes.secondrows}>
          <Tdcells className={classes.cells}>8.1</Tdcells>
          <Tdcells className={classes.cells}>8.2</Tdcells>
          <Tdcells className={classes.cells}>8.3</Tdcells>
          <Tdcells className={classes.cells}>8.4</Tdcells>
          <Tdcells className={classes.cells}>8.5</Tdcells>
        </Trrow>
        <Trrow className={classes.secondrows}>
          <Tdcells className={classes.cells}>7.1</Tdcells>
          <Tdcells className={classes.cells}>7.2</Tdcells>
          <Tdcells className={classes.cells}>7.3</Tdcells>
          <Tdcells className={classes.cells}>7.4</Tdcells>
          <Tdcells className={classes.cells}>7.5</Tdcells>
        </Trrow>
        <Trrow className={classes.secondrows}>
          <Tdcells className={classes.cells}>6.1</Tdcells>
          <Tdcells className={classes.cells}>6.2</Tdcells>
          <Tdcells className={classes.cells}>6.3</Tdcells>
          <Tdcells className={classes.cells}>6.4</Tdcells>
          <Tdcells className={classes.cells}>6.5</Tdcells>
        </Trrow>
        </Tbody>
         <Tbody className={classes.firstfloors}>
        <Trrow className={classes.firstrows}>
          <Tdcells className={classes.cells}>5.1</Tdcells>
          <Tdcells className={classes.cells}>5.2</Tdcells>
          <Tdcells className={classes.cells}>5.3</Tdcells>
          <Tdcells className={classes.cells}>5.4</Tdcells>
          <Tdcells className={classes.cells}>5.5</Tdcells>
        </Trrow>
        <Trrow className={classes.firstrows}>
          <Tdcells className={classes.cells}>4.1</Tdcells>
          <Tdcells className={classes.cells}>4.2</Tdcells>
          <Tdcells className={classes.cells}>4.3</Tdcells>
          <Tdcells className={classes.cells}>4.4</Tdcells>
          <Tdcells className={classes.cells}>4.5</Tdcells>
        </Trrow>
        <Trrow className={classes.firstrows}>
          <Tdcells className={classes.cells}>3.1</Tdcells>
          <Tdcells className={classes.cells}>3.2</Tdcells>
          <Tdcells className={classes.cells}>3.3</Tdcells>
          <Tdcells className={classes.cells}>3.4</Tdcells>
          <Tdcells className={classes.cells}>3.5</Tdcells>
        </Trrow>
        <Trrow className={classes.firstrows}>
          <Tdcells className={classes.cells}>2.1</Tdcells>
          <Tdcells className={classes.cells}>2.2</Tdcells>
          <Tdcells className={classes.cells}>2.3</Tdcells>
          <Tdcells className={classes.cells}>2.4</Tdcells>
          <Tdcells className={classes.cells}>2.5</Tdcells>
        </Trrow>
        <Trrow className={classes.firstrows}>
          <Tdcells className={classes.cells}>1.1</Tdcells>
          <Tdcells className={classes.cells}>1.2</Tdcells>
          <Tdcells className={classes.cells}>1.3</Tdcells>
          <Tdcells className={classes.cells}>1.4</Tdcells>
          <Tdcells className={classes.cells}>1.5</Tdcells>
        </Trrow>
        </Tbody>
      </Table>
      </Card>
      <Textitem></Textitem>
     
  </Wrapper>
      )
}






      export default App