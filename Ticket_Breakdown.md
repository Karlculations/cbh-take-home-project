# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

<br>

# Ticket 1 - Add custom id column to Agent Table
## Description
Currently the system uses the `Agents` table in the database `id` column as their ID in the generated report. We would like to change this so that the Facility can add a custom id to each Agent, thus allowing for better id strings on the report and avoids leaking unnecessary database/table info (in this case the Agent's row `id` in the `Agents` table).

## Implementation
Add an additional `custom_id` column to the `Agents` database as varchar (256), nullable and set the default to `null`. Update the `Agent` model to include this new field and update the ReadMe and Confluence pages to reflect these changes. In the even an automigration file isn't created, you will need to create one manually.

## Acceptance Criteria
- Show the updated `Agent` model, which should contain the new `custom_id` field.
- Demonstrate that this migration file can be executed (whether it is an automigration or on that was manually created). Show the `Agent` table before and after. Also, please show that the newly created migration was inserted into the migration history table.
- Demonstrate that the report can still be generated and still displays the Agent's `id` when `getShiftsByFacility` and `generateReport` are ran.

## Estimate Time
Less than a day

<br>

# Ticket 2 - Update the returned Agent metadata
## Description
Currently the system uses the `Agents` table in the database `id` column as their ID in the generated report. Previously, the `Agent` table was updated with a field called `custom_id`. We would now like to update the Agent's metadata that is returned when `getShiftsByFacility` is called.

## Implementation
Update the `getShiftsByFacility` function to include the Agent's `custom_id` field in the metadata.

## Acceptance Criteria
- Demonstrate that the metadata was updated by calling `getShiftsByFacility` and displaying the returned data.
- Demonstrate that the report can still be generated and still displays the Agent's `id` when `getShiftsByFacility` and `generateReport` are ran.

## Estimate Time
Less than a day


<br>

# Ticket 3 - Update the generated report to use `custom_id` instead of `id`
## Description
Currently the system uses the `Agents` table in the database `id` column as their ID in the generated report. Previously, the `Agent` table was updated with a field called `custom_id`. We would now like to update the id that appears on the generated report. Instead of the `id` field, let's use the `custom_id` field.

## Implementation
Update the `generateReport` function to use the Agent's `custom_id` field instead of the Agent's `id`.

## Acceptance Criteria
- Demonstrate that the report can still be generated and now displays the Agent's `custom_id` when `getShiftsByFacility` and `generateReport` are ran instead of the Agent's `id`.

## Estimate Time
Less than a day