# ObservableArray
ObservableArray provides a pub/sub model to (some) array events. Know exactly when items are added/removed from the array.

## Supported Browsers
- Chrome
- Safari
- FireFox
- IE 10+

## Usage
Here is a simple example where all of the events will trigger a printout.
```javascript
var array = new ObservableArray();

array.listen(function(values, type, array) {
	console.log(values, type, array);
});
```

Currently, there are two types of events, specified by `type`:
- `add`
- `remove`

Both of these will provide an array of values that have been modified to `values`.

The ObservableArray is stored in the `array` parameter.

## API
```javascript
new ObservableArray()
```
- Returns: a new instance of ObservableArray

```javascript
ObservableArray.prototype.listen(listener)
```
- Returns: the instance of ObservableArray
- Parameters:
	- `listener` - the callback function that will be called when an event happens on the ObservableArray

```javascript
ObservableArray.prototype.alert(values, type)
```
- This method can be used in order to create custom events on the ObservableArray.
- Returns: the instance of ObservableArray
- Parameters:
	- `value` - the callback function that will be called when an event happens on the ObservableArray

```javascript
ObservableArray.prototype.unlisten(listener)
```
- Returns: the instance of ObservableArray
- Parameters:
	- `listener` - the callback function that should be removed from the list of callbacks triggered for events

```javascript
ObservableArray.prototype.push(item[, item2, ...])
```
- This method adds the item(s) to the instance of ObservableArray and throws the `add` event.
- Returns: the instance of ObservableArray
- Parameters:
	- `item` - an item to add to the instance of ObservableArray

```javascript
ObservableArray.prototype.extend(array)
```
- This method adds the items in `array` to the instance of ObservableArray and throws the `add` event.
- Returns: the instance of ObservableArray
- Parameters:
	- `array` - an array which will have its items added to the instance of ObservableArray

```javascript
ObservableArray.prototype.remove(item[, item2, ...])
```
- This method removes the specified item(s) and throws the `remove` event.
- Returns: the instance of ObservableArray
- Parameters:
	- `item` - an item to remove from the instance of ObservableArray

```javascript
ObservableArray.prototype.indexOf(item)
```
- Returns: the index of the `item`
- Parameters:
	- `item` - an item for which to provide an index.
