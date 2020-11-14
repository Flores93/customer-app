import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

//HOCs
import { setPropsAsInitials } from "../../../helpers/setPropsAstInitials";

const isRequired = (value) => !value && "Este campo es obligatorio";

const isNumber = (value) =>
  isNaN(Number(value)) && "Este campo debé ser numerico";

const MyInput = ({ input, meta, type }) => {
  return (
    <div>
      <input {...input} type={!type ? "text" : type} />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  );
};

const CustomerEdit = ({ nombre, dni, edad }) => {
  return (
    <div>
      <h2>Edición del cliente</h2>
      <form action="">
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <Field
            name="nombre"
            component={MyInput}
            validate={isRequired}
          ></Field>
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <Field
            name="dni"
            component={MyInput}
            validate={[isRequired, isNumber]}
          ></Field>
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <Field
            name="edad"
            component={MyInput}
            type="number"
            validate={[isRequired, isNumber]}
          ></Field>
        </div>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  nombre: PropTypes.string,
  dni: PropTypes.string,
  edad: PropTypes.number,
};

// const mapStateToProps = (state, props) => ({
//   initialValues: props,
// });

const CustomerEditForm = reduxForm({ form: "CustomerEdit" })(CustomerEdit);

// export default connect(mapStateToProps)(CustomerEditForm);
export default setPropsAsInitials(CustomerEditForm);
