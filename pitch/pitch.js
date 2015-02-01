// to plot
// ((506250000-8100x^2)^(1/2))/250 top side
// -((506250000-8100x^2)^(1/2))/250 bottom side
// in feet
// http://graphsketch.com/?eqn1_color=1&eqn1_eqn=sqrt%28506250000-8100x^2%29%2F250&eqn2_color=2&eqn2_eqn=-%28%28506250000-8100x^2%29^%281%2F2%29%29%2F250&eqn3_color=3&eqn3_eqn=%28%2816-4x^2%29^%281%2F2%29%29%2F4&eqn4_color=4&eqn4_eqn=-%28%2816-4x^2%29^%281%2F2%29%29%2F4&eqn5_color=5&eqn5_eqn=&eqn6_color=6&eqn6_eqn=&x_min=-300&x_max=300&y_min=-200&y_max=200&x_tick=25&y_tick=25&x_label_freq=2&y_label_freq=2&do_grid=0&do_grid=1&bold_labeled_lines=0&bold_labeled_lines=1&line_width=4&image_w=850&image_h=525



function offPitch(x,y,z) {
  if (z < 0) {
    return ture; // Under ground
  }
  if ( ((x*x)/(250*250)) + ((y*y)/(90*90)) > 1 ) {
    return ture; // out of bounds
  }
}
function edgePitch(x,y,z) {
  if (z < .1) {
    return ture; // Under ground
  }
  if ( ((x*x)/(250*250)) + ((y*y)/(90*90)) = .99 ) {
    return ture; // out of bounds
  }
}
