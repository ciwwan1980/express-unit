# Express Convert Units API

We got a client request:
We want an API to convert units to use it in some of our products.

## Example

### Time

Requests:

- GET `/time/12/h/min`
- GET `/time?value=12&from=h&to=min`

Response:

```json
{
  "result": 720
}
```

## Briefing

> Team Lead

The client wants to convert the following units:

- Length
- Time
- Temperature

After a quick check I found [convert-units package](https://www.npmjs.com/package/convert-units) which does all the conversions we need and more.

# Tasks

1. Don't freak out, this is meant to be a challenge, take your time. **You want to use middlewares here!**
1. Create an express server
1. Have a dev script that runs the app with nodemon
1. PORT env can be used to overwrite app port otherwise 3000
1. Make sure to understand how convert-units works you can use the [runkit playground](https://runkit.com/npm/convert-units) for this.
1. Create the length, time and temperature endpoints to do the conversion
1. Errors should make sense, convert-units throws some nice errors, make use of those
1. Use proper [status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Extra

1. After the first prototype was sended to the client they complain about from and to values. They would like to have some aliases. So the following would work.

- GET `/time/12/h/min`
- GET `/time?value=12&from=h&to=min`
- GET `/time/12/hours/minutes`
- GET `/time?value=12&from=hours&to=minutes`

- GET `/temperature/10/C/K`
- GET `/temperature?value=10&from=C&to=K`
- GET `/temperature/10/celsius/kelvin`
- GET `/temperature?value=10&from=celsius&to=kelvin`

Come up with more aliases and add them in away that they can be configured in an _"easy"_ manner.
