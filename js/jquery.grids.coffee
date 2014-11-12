((e) ->
	$.fn.extend ->
		grids: (options) ->
			options.columns = 3  unless options.columns
			options.rows = 2  unless options.rows
			options.resize = false  unless options.resize
			$this = $(this)
			_parent = this
			_initOptions =
				columns: options.columns
				rows: options.rows

			if options.resize
				options = _parent.getColumsRWD($this, options, _initOptions)  if options.responsive
				@generateGrids $this, options
				$(window).resize ->
					options = _parent.getColumsRWD($this, options, _initOptions)  if options.responsive
					_parent.generateGrids $this, options
					return
			else
				@generateGrids $this, options
			return

		generateGrids: (wrapper, options) ->
			hWrapper = wrapper.height()
			wWrapper = wrapper.width()
			hGrid = wrapper.height() / options.rows
			wGrid = wrapper.width() / options.columns
			$(options.el).css
				height: hGrid
				width: wGrid
		
		getColumsRWD: (wrapper, options, initOptions) ->
			$.each options.responsive, (i, val) ->
				if wrapper.width() <= 768 and wrapper.width() > 480
					if val.breakPoint is 768
						options.columns = val.columns
						options.rows = val.rows
				else if wrapper.width() <= 480
					if val.breakPoint is 480
						options.columns = val.columns
						options.rows = val.rows
				else
					options.columns = initOptions.columns
					options.rows = initOptions.rows
				return
			options
) jQuery