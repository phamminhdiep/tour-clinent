import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
  return (
    <div class="form-container">
    <h2>Đăng Nhập người dùng</h2>
    <form>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"/>
        </div>
        <div class="form-group">
          <label for="password">Mật khẩu:</label>
          <input type="password" id="password" name="password"/>
        </div>

      <div class="form-group">
        <button type="submit">Đăng nhập</button>
      </div>
      <div class="form-group">
        <button type="submit">Quên mật khẩu</button>
      </div>
      <div class="form-group">
        <button type="submit"><Link to={'/register'}>Đăng ký</Link></button>
      </div>
      <div class="form-group">
        <button type="submit"><Link to={'/'}/>Cancel</button>
      </div>
    </form>
  </div>
  )
}
