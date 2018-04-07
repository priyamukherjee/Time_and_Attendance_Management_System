$(document).ready(function(){
    /*
        $('#prjTable [data-toggle="popover"]').popover({
            trigger: 'focus',
            placement : 'top',
            html : true,
            content: function() {
                if($(this).next().html()) {
                    return $(this).next().html();
                }
                return "No Employee Found";
            }
        });
    */
    //Maintain Employee - Load data in Modal on Edit Employee
    $(document).on('click', '#empTable .edit-modal', function() {
        $('#updateEmpModal').modal('show');

        $('#updateEmpModal #inputUserID').val($(this).data('id'));
        $('#updateEmpModal #inputFullName').val($(this).data('fullname'));
        $('#updateEmpModal #inputAddress').val($(this).data('address'));
        $('#updateEmpModal #inputEmail').val($(this).data('emailid'));
        $('#updateEmpModal #inputJobTitle').val($(this).data('jobtitle'));
        $('#updateEmpModal #inputSalary').val($(this).data('salary'));
    });

    //Maintain Employee - Delete Record Modal
    $(document).on('click', '#empTable .delete-modal', function() {
        $('#removeEmpModal').modal('show');

        $('#removeEmpModal #removeEmp').text($(this).data('id') + " " + $(this).data('fullname'));
        $('#removeEmpModal #InputRemoveEmp').val($(this).data('id'));

    });

    //Maintain Project - Load data in Modal on Edit Project
    $(document).on('click', '#prjTable .edit-modal', function() {
        var supervisorID = $(this).data('supervisor') != "Not Assigned" ? $(this).data('supervisor') : 0;
        $('#updatePrjModal').modal('show');

        $('#updatePrjModal #inputProjectID').val($(this).data('id'));
        $('#updatePrjModal #inputTitle').val($(this).data('projecttitle'));
        $('#updatePrjModal #SupervisorSelection').val(supervisorID);
        $('#updatePrjModal #inputBudget').val($(this).data('budget'));
        $('#updatePrjModal #inputCustomerName').val($(this).data('customer'));
        if($(this).data('empids')) {
            var data = $(this).data('empids').toString().split(',');
            $('#updatePrjModal #EmployeeSelection').val(data);
        }
    });

    //Maintain Project - Delete Record Modal
    $(document).on('click', '#prjTable .delete-modal', function() {
        $('#removePrjModal').modal('show');

        $('#removePrjModal #removePrj').text($(this).data('id') + " " + $(this).data('projecttitle'));
        $('#removePrjModal #InputRemovePrj').val($(this).data('id'));

    });

    //Manage Project - Delete Record Modal
    $(document).on('click', '#managePrjtable .delete-modal', function() {
        $('#removePrjEmpModal').modal('show');

        $('#removePrjEmpModal #removePrjEmp').text($(this).data('id') + " " + $(this).data('fullname'));
        $('#removePrjEmpModal #InputRemovePrjEmp').val($(this).data('id'));

    });

    //Create jQuery DataTable   -  gives Filter, Pagination, Sort features
    $('#empTable').DataTable();
    $('#prjTable').DataTable();
    $('#myTimesheetTable').DataTable({
        aaSorting: [[2, 'desc']]
    });
    $('#timesheetTable').DataTable({
        aaSorting: [[4, 'desc']]
    });

    //Update MY Timesheet - Load data in Modal on Update Timesheet
    $(document).on('click', '#myTimesheetTable .edit-modal', function() {
        $('#updateMyTimesheetModal').modal('show');        

        $('#updateMyTimesheetModal #inputProjectId').val($(this).data('projectid'));
        $('#updateMyTimesheetModal #inputProject').val($(this).data('projectid') + " - " + $(this).data('projecttitle'));
        $('#updateMyTimesheetModal #inputDate').val($(this).data('date'));
        $('#updateMyTimesheetModal #inputStartTime').val($(this).data('starttime'));
        $('#updateMyTimesheetModal #inputEndTime').val($(this).data('endtime'));
    });

    //Update Employee Timesheet - Load data in Modal on Update Timesheet
    $(document).on('click', '#timesheetTable .edit-modal', function() {
        $('#updateEmpTimesheetModal').modal('show');        

        $('#updateEmpTimesheetModal #inputEmployeeId').val($(this).data('id'));
        $('#updateEmpTimesheetModal #inputProjectId').val($(this).data('projectid'));
        $('#updateEmpTimesheetModal #inputEmployee').val($(this).data('id') + " - "+ $(this).data('fullname'));
        $('#updateEmpTimesheetModal #inputProject').val($(this).data('projectid') + " - " + $(this).data('projecttitle'));
        $('#updateEmpTimesheetModal #inputDate').val($(this).data('date'));
        $('#updateEmpTimesheetModal #inputStartTime').val($(this).data('starttime'));
        $('#updateEmpTimesheetModal #inputEndTime').val($(this).data('endtime'));
    });
});