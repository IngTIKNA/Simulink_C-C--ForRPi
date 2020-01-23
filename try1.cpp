//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: try1.cpp
//
// Code generated for Simulink model 'try1'.
//
// Model version                  : 1.5
// Simulink Coder version         : 9.2 (R2019b) 18-Jul-2019
// C/C++ source code generated on : Thu Jan 23 10:10:52 2020
//
// Target selection: ert.tlc
// Embedded hardware selection: ARM Compatible->ARM Cortex
// Code generation objectives: Unspecified
// Validation result: Not run
//
#include "try1.h"
#include "try1_private.h"

// Model step function
void untitledModelClass::step()
{
  // Outport: '<Root>/Steering' incorporates:
  //   Constant: '<S1>/Constant'
  //   Inport: '<Root>/p1'
  //   Sum: '<S1>/Add'

  rtY.Steering = rtP.Constant_Value + rtU.p1;

  // Outport: '<Root>/Velocity ' incorporates:
  //   Constant: '<S1>/Constant1'

  rtY.Velocity = rtP.Constant1_Value;
}

// Model initialize function
void untitledModelClass::initialize()
{
  // Registration code

  // external inputs
  rtU.p1 = 0.0;

  // external outputs
  (void) memset(static_cast<void *>(&rtY), 0,
                sizeof(ExtY));
}

// Model terminate function
void untitledModelClass::terminate()
{
  // (no terminate code required)
}

// Constructor
untitledModelClass::untitledModelClass() : rtM()
{
  // Currently there is no constructor body generated.
}

// Destructor
untitledModelClass::~untitledModelClass()
{
  // Currently there is no destructor body generated.
}

// Real-Time Model get method
RT_MODEL * untitledModelClass::getRTM()
{
  return (&rtM);
}

//
// File trailer for generated code.
//
// [EOF]
//
