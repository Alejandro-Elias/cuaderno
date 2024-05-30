import React from 'react'

type Props = {}

const FormAddPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div style={{ marginTop: 50, borderRadius: 10, borderColor: "10px solid green", padding: "5px 15px 0 15px" }} className='container teal darken-4'>
        <h3 style={{ paddingBottom: 15 }}>Ingresar Nuevo Tema</h3>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label className='active' htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" />
                <label className='active' htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="email" type="email" className="validate" />
                <label className='active' htmlFor="email">Email</label>
              </div>
              <div className="input-field col s6">
                <input id="password" type="password" className="validate" />
                <label className='active' htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                This is an inline input field:
                <div className="input-field inline">
                  <input id="email_inline" type="email" className="validate" />
                  <label className='active' htmlFor="email_inline">Email</label>
                  <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default FormAddPage;