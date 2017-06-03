// When this worker is called:
  // 1. Find the first event that needs to be delivered
  // 2. For the event, Send email to recipient with event link
  // 3. Mark event as sent in Events table

// 1. Find the first event that needs to be delivered
// Query the Events table for events with delivery_time before "now" AND {status: 'not sent'}
  // statuses: ['not sent', 'sent', 'opened', 'attempted']
// IF no results found
  // return 'nothing to send' / exit out
// ELSE
  // Format DB query result for Mailgun sending AND hold on to event_id for updating status later

// 2. For the event, Send email to recipient with event link
  // Use a utility function to map and give to mailgun

// 3. Mark event as sent in Events table
  // IF send response is success
    // Use event_id to update status to 'sent'
  // ELSE, Use event_id to update status to 'attempted'
