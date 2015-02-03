// to plot
// ((506250000-8100x^2)^(1/2))/250 top side
// -((506250000-8100x^2)^(1/2))/250 bottom side
// in feet
// http://graphsketch.com/?eqn1_color=1&eqn1_eqn=sqrt(506250000-8100x%5E2)%2F250&eqn2_color=2&eqn2_eqn=-((506250000-8100x%5E2)%5E(1%2F2))%2F250&eqn3_color=3&eqn3_eqn=((16-4x%5E2)%5E(1%2F2))%2F2&eqn4_color=4&eqn4_eqn=-((16-4x%5E2)%5E(1%2F2))%2F2&eqn5_color=5&eqn5_eqn=-sqrt(((x%5E2)%5E(1%2F2)-200)*100)&eqn6_color=6&eqn6_eqn=sqrt(((x%5E2)%5E(1%2F2)-200)*100)&x_min=-263&x_max=263&y_min=-95&y_max=95&x_tick=10&y_tick=10&x_label_freq=2.5&y_label_freq=1&do_grid=0&do_grid=1&bold_labeled_lines=0&line_width=2&image_w=1004&image_h=350http://graphsketch.com/?eqn1_color=1&eqn1_eqn=sqrt(506250000-8100x%5E2)%2F250&eqn2_color=2&eqn2_eqn=-((506250000-8100x%5E2)%5E(1%2F2))%2F250&eqn3_color=3&eqn3_eqn=((16-4x%5E2)%5E(1%2F2))%2F2&eqn4_color=4&eqn4_eqn=-((16-4x%5E2)%5E(1%2F2))%2F2&eqn5_color=5&eqn5_eqn=-sqrt(((x%5E2)%5E(1%2F2)-200)*100)&eqn6_color=6&eqn6_eqn=sqrt(((x%5E2)%5E(1%2F2)-200)*100)&x_min=-263&x_max=263&y_min=-95&y_max=95&x_tick=10&y_tick=10&x_label_freq=2.5&y_label_freq=1&do_grid=0&do_grid=1&bold_labeled_lines=0&line_width=2&image_w=1004&image_h=350http://graphsketch.com/?eqn1_color=1&eqn1_eqn=sqrt(506250000-8100x%5E2)%2F250&eqn2_color=2&eqn2_eqn=-((506250000-8100x%5E2)%5E(1%2F2))%2F250&eqn3_color=3&eqn3_eqn=((16-4x%5E2)%5E(1%2F2))%2F2&eqn4_color=4&eqn4_eqn=-((16-4x%5E2)%5E(1%2F2))%2F2&eqn5_color=5&eqn5_eqn=-sqrt(((x%5E2)%5E(1%2F2)-200)*100)&eqn6_color=6&eqn6_eqn=sqrt(((x%5E2)%5E(1%2F2)-200)*100)&x_min=-263&x_max=263&y_min=-95&y_max=95&x_tick=10&y_tick=10&x_label_freq=2.5&y_label_freq=1&do_grid=0&do_grid=1&bold_labeled_lines=0&line_width=2&image_w=1004&image_h=350http://graphsketch.com/?eqn1_color=1&eqn1_eqn=sqrt(506250000-8100x%5E2)%2F250&eqn2_color=2&eqn2_eqn=-((506250000-8100x%5E2)%5E(1%2F2))%2F250&eqn3_color=3&eqn3_eqn=((16-4x%5E2)%5E(1%2F2))%2F2&eqn4_color=4&eqn4_eqn=-((16-4x%5E2)%5E(1%2F2))%2F2&eqn5_color=5&eqn5_eqn=-sqrt(((x%5E2)%5E(1%2F2)-200)*100)&eqn6_color=6&eqn6_eqn=sqrt(((x%5E2)%5E(1%2F2)-200)*100)&x_min=-263&x_max=263&y_min=-95&y_max=95&x_tick=10&y_tick=10&x_label_freq=2.5&y_label_freq=1&do_grid=0&do_grid=1&bold_labeled_lines=0&line_width=2&image_w=1004&image_h=350


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
