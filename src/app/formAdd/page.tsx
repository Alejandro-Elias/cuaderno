import React from 'react'
import styles from '@/src/app/viewInfo/viewInfo.module.css'

type Props = {}

const FormAddPage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div  className={`container ${styles.main}`}>
        <h5 style={{ paddingBottom: 15, color: "#d87d3d", textAlign: "center" }}>Ingresar Nuevo Tema</h5>

        <div className={`column %{styles.input}`}>
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