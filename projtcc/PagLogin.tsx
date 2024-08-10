import './../pagLog.css'
import React from 'react'
export function PagLog(){

    return(
       <>
       <div className="page">
        <form method="POST" className="formLogin" action='/'>
            <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu e-mail" autoFocus required />
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" required />
            <a href="recuperação.html">Esqueci minha senha</a>
            <input type="submit" value="Acessar" className="btn" />
        </form>
    </div>
    <div className="page">
        <section className="formReset">
            <form id="resetForm" method="POST">
                <h1>Recuperar Senha</h1>
                <p>Digite o e-mail associado à sua conta. Você receberá um link para redefinir sua senha.</p>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Digite seu e-mail" required />
                <div id="error-message" className="error-message">Por favor, insira um e-mail válido.</div>
                <div id="success-message" className="success-message">E-mail de recuperação enviado com sucesso!</div>
                <input type="submit" value="Enviar Link de Recuperação" className="btn" />
                <a href="index.html" className="back-link">Voltar ao Login</a>
            </form>
        </section>
    </div>
         
       </>
    )
}