(function(e) {
  return $.fn.extend(function() {
    return {
      grids: function(options) {
        var $this, _initOptions, _parent;
        if (!options.columns) {
          options.columns = 3;
        }
        if (!options.rows) {
          options.rows = 2;
        }
        if (!options.resize) {
          options.resize = false;
        }
        $this = $(this);
        _parent = this;
        _initOptions = {
          columns: options.columns,
          rows: options.rows
        };
        if (options.resize) {
          if (options.responsive) {
            options = _parent.getColumsRWD($this, options, _initOptions);
          }
          this.generateGrids($this, options);
          $(window).resize(function() {
            if (options.responsive) {
              options = _parent.getColumsRWD($this, options, _initOptions);
            }
            _parent.generateGrids($this, options);
          });
        } else {
          this.generateGrids($this, options);
        }
      },
      generateGrids: function(wrapper, options) {
        var hGrid, hWrapper, wGrid, wWrapper;
        hWrapper = wrapper.height();
        wWrapper = wrapper.width();
        hGrid = wrapper.height() / options.rows;
        wGrid = wrapper.width() / options.columns;
        return $(options.el).css({
          height: hGrid,
          width: wGrid
        });
      },
      getColumsRWD: function(wrapper, options, initOptions) {
        $.each(options.responsive, function(i, val) {
          if (wrapper.width() <= 768 && wrapper.width() > 480) {
            if (val.breakPoint === 768) {
              options.columns = val.columns;
              options.rows = val.rows;
            }
          } else if (wrapper.width() <= 480) {
            if (val.breakPoint === 480) {
              options.columns = val.columns;
              options.rows = val.rows;
            }
          } else {
            options.columns = initOptions.columns;
            options.rows = initOptions.rows;
          }
        });
        return options;
      }
    };
  });
})(jQuery);
