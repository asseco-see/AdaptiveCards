/* ----------------------------------------------------------------------------
 * This file was automatically generated by SWIG (http://www.swig.org).
 * Version 3.0.12
 *
 * Do not make changes to this file unless you know what you are doing--modify
 * the SWIG interface file instead.
 * ----------------------------------------------------------------------------- */

package io.adaptivecards.objectmodel;

public enum ActionType {
  Unsupported(0),
  ShowCard,
  Submit,
  OpenUrl,
  ToggleVisibility,
  Custom,
  UnknownAction;

  public final int swigValue() {
    return swigValue;
  }

  public static ActionType swigToEnum(int swigValue) {
    ActionType[] swigValues = ActionType.class.getEnumConstants();
    if (swigValue < swigValues.length && swigValue >= 0 && swigValues[swigValue].swigValue == swigValue)
      return swigValues[swigValue];
    for (ActionType swigEnum : swigValues)
      if (swigEnum.swigValue == swigValue)
        return swigEnum;
    throw new IllegalArgumentException("No enum " + ActionType.class + " with value " + swigValue);
  }

  @SuppressWarnings("unused")
  private ActionType() {
    this.swigValue = SwigNext.next++;
  }

  @SuppressWarnings("unused")
  private ActionType(int swigValue) {
    this.swigValue = swigValue;
    SwigNext.next = swigValue+1;
  }

  @SuppressWarnings("unused")
  private ActionType(ActionType swigEnum) {
    this.swigValue = swigEnum.swigValue;
    SwigNext.next = this.swigValue+1;
  }

  private final int swigValue;

  private static class SwigNext {
    private static int next = 0;
  }
}

