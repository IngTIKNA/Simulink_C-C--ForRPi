//
// Academic License - for use in teaching, academic research, and meeting
// course requirements at degree granting institutions only.  Not for
// government, commercial, or other organizational use.
//
// File: try1.h
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
#ifndef RTW_HEADER_try1_h_
#define RTW_HEADER_try1_h_
#include <string.h>
#include <stddef.h>
#ifndef try1_COMMON_INCLUDES_
# define try1_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 // try1_COMMON_INCLUDES_

#include "try1_types.h"

// Macros for accessing real-time model data structure
#ifndef rtmGetErrorStatus
# define rtmGetErrorStatus(rtm)        ((rtm)->errorStatus)
#endif

#ifndef rtmSetErrorStatus
# define rtmSetErrorStatus(rtm, val)   ((rtm)->errorStatus = (val))
#endif

#define try1_M                         (rtM)

// External inputs (root inport signals with default storage)
typedef struct {
  real_T p1;                           // '<Root>/p1'
} ExtU;

// External outputs (root outports fed by signals with default storage)
typedef struct {
  real_T Steering;                     // '<Root>/Steering'
  real_T Velocity;                     // '<Root>/Velocity '
} ExtY;

// Parameters (default storage)
struct P_ {
  real_T Constant_Value;               // Expression: 1
                                          //  Referenced by: '<S1>/Constant'

  real_T Constant1_Value;              // Expression: 1
                                          //  Referenced by: '<S1>/Constant1'

};

// Real-time Model Data Structure
struct tag_RTM {
  const char_T *errorStatus;
};

// Class declaration for model try1
class untitledModelClass {
  // public data and function members
 public:
  // External inputs
  ExtU rtU;

  // External outputs
  ExtY rtY;

  // model initialize function
  void initialize();

  // model step function
  void step();

  // model terminate function
  void terminate();

  // Constructor
  untitledModelClass();

  // Destructor
  ~untitledModelClass();

  // Real-Time Model get method
  RT_MODEL * getRTM();

  // private data and function members
 private:
  // Tunable parameters
  static P rtP;

  // Real-Time Model
  RT_MODEL rtM;
};

//-
//  The generated code includes comments that allow you to trace directly
//  back to the appropriate location in the model.  The basic format
//  is <system>/block_name, where system is the system number (uniquely
//  assigned by Simulink) and block_name is the name of the block.
//
//  Use the MATLAB hilite_system command to trace the generated code back
//  to the model.  For example,
//
//  hilite_system('<S3>')    - opens system 3
//  hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
//
//  Here is the system hierarchy for this model
//
//  '<Root>' : 'try1'
//  '<S1>'   : 'try1/Lane_keeping_control '

#endif                                 // RTW_HEADER_try1_h_

//
// File trailer for generated code.
//
// [EOF]
//
