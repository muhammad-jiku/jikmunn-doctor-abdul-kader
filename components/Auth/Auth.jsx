'use client';

import React, { useState } from 'react';

function Auth() {
  const [toggleStatus, setToggleStatus] = useState(true);

  return (
    // <Components.Container>
    //   <Components.SignUpContainer signinIn={toggleStatus}>
    //     <Components.Form>
    //       <Components.Title>Create Account</Components.Title>
    //       <Components.Input type='text' placeholder='Name' />
    //       <Components.Input type='email' placeholder='Email' />
    //       <Components.Input type='password' placeholder='Password' />
    //       <Components.Button>Sign Up</Components.Button>
    //     </Components.Form>
    //   </Components.SignUpContainer>

    //   <Components.SignInContainer signinIn={toggleStatus}>
    //     <Components.Form>
    //       <Components.Title>Sign in</Components.Title>
    //       <Components.Input type='email' placeholder='Email' />
    //       <Components.Input type='password' placeholder='Password' />
    //       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
    //       <Components.Button>Sigin In</Components.Button>
    //     </Components.Form>
    //   </Components.SignInContainer>

    //   <Components.OverlayContainer signinIn={toggleStatus}>
    //     <Components.Overlay signinIn={toggleStatus}>
    //       <Components.LeftOverlayPanel signinIn={toggleStatus}>
    //         <Components.Title>Welcome Back!</Components.Title>
    //         <Components.Paragraph>
    //           To keep connected with us please login with your personal info
    //         </Components.Paragraph>
    //         <Components.GhostButton onClick={() => setToggleStatus(true)}>
    //           Sign In
    //         </Components.GhostButton>
    //       </Components.LeftOverlayPanel>

    //       <Components.RightOverlayPanel signinIn={toggleStatus}>
    //         <Components.Title>Hello, Friend!</Components.Title>
    //         <Components.Paragraph>
    //           Enter Your personal details and start journey with us
    //         </Components.Paragraph>
    //         <Components.GhostButton onClick={() => setToggleStatus(false)}>
    //           Sigin Up
    //         </Components.GhostButton>
    //       </Components.RightOverlayPanel>
    //     </Components.Overlay>
    //   </Components.OverlayContainer>
    // </Components.Container>

    <div>
      <div signinIn={toggleStatus}>
        <form>
          <h2>Create Account</h2>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Sign Up</button>
        </form>
      </div>

      <div signinIn={toggleStatus}>
        <form>
          <h2>Sign in</h2>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <a href='#'>Forgot your password?</a>
          <button>Sigin In</button>
        </form>
      </div>

      <div signinIn={toggleStatus}>
        <div signinIn={toggleStatus}>
          <div signinIn={toggleStatus}>
            <h2>Welcome Back!</h2>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button onClick={() => setToggleStatus(true)}>Sign In</button>
          </div>

          <div signinIn={toggleStatus}>
            <h2>Hello, Friend!</h2>
            <p>Enter Your personal details and start journey with us</p>
            <button onClick={() => setToggleStatus(false)}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
