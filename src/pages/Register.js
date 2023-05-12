import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div class="form-container">
    <h2>Đăng ký người dùng</h2>
    <form>
      <div class="form-group">
        <label for="fullname">Họ và tên:</label>
        <input type="text" id="fullname" name="fullname" />
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div class="form-group">
        <label for="email">Phone:</label>
        <input type="text " id="phone" name="phone" />
      </div>
      <div class="form-group">
        <label for="email">Địa chỉ:</label>
        <input type="text " id="address" name="address" />
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div class="form-group">
        <label for="password">Nhập lại mật khẩu:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div class="form-group">
        <button type="submit">Đăng ký</button>
      </div>
      <div class="form-group">
        <button type="submit"><Link to={'/login'}>Quay lại trang đăng nhập</Link></button>
      </div>
      <div class="form-group">
        <button ><Link to={'/'}>Cancel</Link></button>
      </div>
    </form>
  </div>
  )
}
