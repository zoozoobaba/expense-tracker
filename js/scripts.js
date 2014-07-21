var currentActivity;
var activity = {activityName:"", activityAmount:0 };
var Activity = {
                    baseLineCost:0,
                    totalCost: function(activityAmount) {
                      this.baseLineCost = this.baseLineCost + activityAmount;
                    }
                  };

$(document).ready(function() {

  $("form#add-activity").submit(function(event) {
    event.preventDefault();
    activity.activityName = $("#activity").val();
    activity.activityAmount = parseInt($("#amount").val());
    $(".activity-input").append("<tr><td>" + activity.activityName
                                + "</td><td>" + activity.activityAmount
                                + "</td></tr>");

    $("#activity").val("");
    $("#amount").val("");

    currentActivity = activity;

  //console.log(activity);
  console.log(currentActivity);
  console.log(currentActivity.activityName);
  console.log(currentActivity.activityAmount);
  console.log(AllActivities.totalCost(3));

  });

});
