import React, { useEffect, useState } from "react";
import axios from "axios";
import './Components.css';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ButtonM from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';


import Clock from 'img/clock.svg';
import Swap from 'img/repeat.svg';
import Arrow from 'img/arrow.png';

import useForm from 'hooks/Form';

const useStyles = makeStyles({
  root: {
    width: "54vw",
    height: "75vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2%",
  },
  content: {
    width: "90%",
    padding: "0",
  },
  title: {
    fontFamily: "IBM Plex Sans",
    fontWeight: "bold",
    fontSize: "2.5vw",
    lineHeight: "42px",
    color: "#19B7E6",
    textAlign: "center",
    margin: "2% 0 1% 0",
  },
  subtitle: {
    marginBottom: "3%",
    fontFamily: "Roboto",
    fontWweight: "normal",
    fontSize: "1vw",
    lineHeight: "19px",
    color: "#4F4F4F",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#EB5757",
    borderRadius: "4px",
    color: "white",
    width: "20vw",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#973737",
    },
  },
  input: {
    width: "20vw",
    height: "7vh",
    "& .MuiFilledInput-input": {
      padding: "5% 4%",
    },
    "& .MuiAutocomplete-inputRoot": {
      padding: "2% 1%",
    },
  },
});

const MyTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#037fff",
      contrastText: "#fff",
      main: "#8FDFF4",
      dark: '#10121b'
    }
  },
});

const inputProps = {
  step: 0.5,
  min: 0
};

const AutoCompleteInput = (props) => {
  const classes = useStyles();
  return (
    <TextField
      {...props.params}
      required
      placeholder={props.placeholder}
      variant="filled"
      className={classes.input}
      InputProps={{
        ...props.params.InputProps,
        endAdornment: (
          <React.Fragment>
            {props.loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : null}
            {props.params.InputProps.endAdornment}
          </React.Fragment>
        ),
      }}
    />
  );
};

const Order = (props) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(""); 
  const [requester, setRequester] = useState("");
  const [grantor, setGrantor] = useState("")
  const [options, setOptions] = useState([]); 
  const [loadingReq, setLoadingReq] = useState(false);
  const [loadingGra, setLoadingGra] = useState(false);

  const { form, onChange, resetForm } = useForm({
    requester: "",
    grantor: "",
    orderPrice: "",
    description: "",
  });

   useEffect(() => {
     if (inputValue) {
       fetchFromAPI(inputValue).then((result) => {
        loadingReq ? setLoadingReq(false): setLoadingGra(false); 
        setOptions(result);
       });
     }
   }, [inputValue]);

  const submitForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const getId = async (input, name) => {
    if(name){
      const response = await axios.get(
        `https://bdt-backend.herokuapp.com/api/v0/users/?search=${name}`
      );

      onChange(input, response.data[0].id);
    }  
  };

  const fetchFromAPI = async (searchedValue) => {
    const response = await axios.get(
      `https://bdt-backend.herokuapp.com/api/v0/users/?search=${searchedValue}`
    );
    return response.data.map((person) => {
      return `${person.first_name} ${person.last_name}`;
     });
   };
   
  const handleSubmit = async () => {    
    const body = {
      requester: form.requester,
      grantor: form.grantor,
      order_price: form.orderPrice,
      description: form.description,
    };
    axios
      .post("https://bdt-backend.herokuapp.com/api/v0/orders/", body)
      .then((res) => {
        console.log(res);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ThemeProvider theme={MyTheme}>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Transação de Horas
          </Typography>
          <Typography className={classes.subtitle}>
            Realizou uma troca pelo Banco do Tempo? Faça aqui sua transferência
            de créditos.
          </Typography>
          <form onSubmit={submitForm}>
            <section className="container-input">
              <article>
                <p className="title-input">De</p>
                <p className="subtitle-input">
                  Insira o nome de quem <b>pediu</b> o serviço
                </p>
                <Autocomplete
                  options={options}
                  autoComplete
                  value={requester}
                  onChange={(event, newValue) => {
                    setRequester(newValue)
                    getId("requester", newValue);
                  }}
                  onInputChange={(event, newInputValue) => {
                    setLoadingReq(true);
                    setInputValue(newInputValue);
                  }}
                  renderInput={(params) => (
                    <AutoCompleteInput
                      placeholder={"Nome do requisitante"}
                      params={params}
                      loading={loadingReq}
                    />
                  )}
                />
              </article>
              <img id="arrow" src={Arrow} alt="Arrow icon" />
              <article>
                <p className="title-input">Para</p>
                <p className="subtitle-input">
                  Insira o nome de quem <b>realizou</b> o serviço
                </p>
                <Autocomplete
                  options={options}
                  autoComplete
                  value={grantor}
                  onChange={(event, newValue) => {
                    setGrantor(newValue);
                    getId("grantor", newValue);
                  }}
                  onInputChange={(event, newInputValue) => {
                    setLoadingGra(true);
                    setInputValue(newInputValue);
                  }}
                  renderInput={(params) => (
                    <AutoCompleteInput
                      placeholder={"Nome de destino"}
                      params={params}
                      loading={loadingGra}
                    />
                  )}
                />
              </article>
            </section>

            <hr />

            <section className="container-input">
              <article>
                <img src={Clock} className="icone-troca" alt="Clock icon" />
                <span className="title-input">Horas</span>
                <p className="subtitle-input">
                  Quantas horas em divisão de 0.5
                </p>
                <TextField
                  required
                  type="number"
                  variant="filled"
                  className={classes.input}
                  inputProps={inputProps}
                  placeholder="0.0"
                  name="orderPrice"
                  onChange={handleChange}
                  value={form.orderPrice}
                />
              </article>
              <article>
                <img src={Swap} className="icone-troca" alt="Swap icon" />
                <span className="title-input">O que foi trocado</span>
                <p className="subtitle-input">Que serviço, produto ou ajuda</p>
                <TextField
                  required
                  placeholder="Descrição"
                  variant="filled"
                  className={classes.input}
                  name="description"
                  onChange={handleChange}
                  value={form.description}
                />
              </article>
            </section>
          </form>
        </CardContent>
        <CardActions>
          <ButtonM onClick={handleSubmit} className={classes.button}>
            SOLICITAR
          </ButtonM>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};;

export default Order;
