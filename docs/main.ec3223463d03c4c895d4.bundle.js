;(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        164: function(module) {
            module.exports = JSON.parse(
                '{"name":"svelte-app","version":"1.0.0","svelte":"index.js","main":"index.js","license":"MIT","devDependencies":{"@babel/core":"^7.8.4","@storybook/addon-actions":"^5.3.14","@storybook/addon-links":"^5.3.14","@storybook/addons":"^5.3.14","@storybook/preset-scss":"^1.0.2","@storybook/svelte":"^5.3.14","autoprefixer":"^9.7.4","babel-loader":"^8.0.6","cross-env":"^5.2.0","css-loader":"^2.1.1","eslint":"^6.8.0","eslint-config-prettier":"^6.10.0","eslint-plugin-html":"^6.0.0","eslint-plugin-prettier":"^3.1.2","eslint-plugin-svelte3":"^2.7.3","file-loader":"^5.1.0","husky":"^4.2.3","lint-staged":"^10.0.7","mini-css-extract-plugin":"^0.6.0","node-sass":"^4.13.1","node-sass-magic-importer":"^5.3.2","postcss":"^7.0.27","postcss-loader":"^3.0.0","prettier":"^1.19.1","prettier-plugin-svelte":"^0.7.0","sass-loader":"^8.0.2","serve":"^11.0.0","style-loader":"^0.23.1","svelte":"^3.19.1","svelte-loader":"^2.13.6","svelte-preprocess":"^3.4.0","webpack-merge":"^4.2.2"},"scripts":{"start":"start-storybook -p 6006","docs":"build-storybook -o docs","lint":"eslint --ext .js,.svelte,.html --ignore-path .gitignore .","lint:fix":"yarn lint --fix","format":"prettier --write  **/**/*.{svelte,js,scss} **/*.{svelte,js,scss} *.{svelte,js,scss}  --ignore-path .gitignore"},"files":["src","dist"],"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"**/*.{svelte, js}":["yarn format","yarn lint:fix","git add"]},"dependencies":{}}'
            )
        },
        2: function(module, __webpack_exports__, __webpack_require__) {
            'use strict'
            var internal = __webpack_require__(0)
            __webpack_require__(80), __webpack_require__(46)
            const get_icon_slot_changes_1 = dirty => ({}),
                get_icon_slot_context_1 = ctx => ({}),
                get_icon_slot_changes = dirty => ({}),
                get_icon_slot_context = ctx => ({})
            function create_else_block(ctx) {
                let button,
                    t,
                    span,
                    current,
                    dispose,
                    if_block =
                        ctx[5] &&
                        (function create_if_block_2(ctx) {
                            let span, current
                            const icon_slot_template = ctx[13].icon,
                                icon_slot = Object(internal.create_slot)(
                                    icon_slot_template,
                                    ctx,
                                    ctx[12],
                                    get_icon_slot_context_1
                                )
                            return {
                                c() {
                                    ;(span = Object(internal.element)('span')),
                                        icon_slot && icon_slot.c(),
                                        Object(internal.set_style)(
                                            span,
                                            '--bg-color',
                                            iconBgColor(ctx[0])
                                        ),
                                        Object(internal.attr)(
                                            span,
                                            'class',
                                            'icon svelte-110x9av'
                                        )
                                },
                                m(target, anchor) {
                                    Object(internal.insert)(
                                        target,
                                        span,
                                        anchor
                                    ),
                                        icon_slot && icon_slot.m(span, null),
                                        (current = !0)
                                },
                                p(ctx, dirty) {
                                    icon_slot &&
                                        icon_slot.p &&
                                        4096 & dirty &&
                                        icon_slot.p(
                                            Object(internal.get_slot_context)(
                                                icon_slot_template,
                                                ctx,
                                                ctx[12],
                                                get_icon_slot_context_1
                                            ),
                                            Object(internal.get_slot_changes)(
                                                icon_slot_template,
                                                ctx[12],
                                                dirty,
                                                get_icon_slot_changes_1
                                            )
                                        ),
                                        (!current || 1 & dirty) &&
                                            Object(internal.set_style)(
                                                span,
                                                '--bg-color',
                                                iconBgColor(ctx[0])
                                            )
                                },
                                i(local) {
                                    current ||
                                        (Object(internal.transition_in)(
                                            icon_slot,
                                            local
                                        ),
                                        (current = !0))
                                },
                                o(local) {
                                    Object(internal.transition_out)(
                                        icon_slot,
                                        local
                                    ),
                                        (current = !1)
                                },
                                d(detaching) {
                                    detaching && Object(internal.detach)(span),
                                        icon_slot && icon_slot.d(detaching)
                                },
                            }
                        })(ctx)
                const default_slot_template = ctx[13].default,
                    default_slot = Object(internal.create_slot)(
                        default_slot_template,
                        ctx,
                        ctx[12],
                        null
                    )
                let button_levels = [
                        ctx[6],
                        { style: ctx[1] },
                        { disabled: ctx[2] },
                        { class: ctx[4] },
                    ],
                    button_data = {}
                for (let i = 0; i < button_levels.length; i += 1)
                    button_data = Object(internal.assign)(
                        button_data,
                        button_levels[i]
                    )
                return {
                    c() {
                        ;(button = Object(internal.element)('button')),
                            if_block && if_block.c(),
                            (t = Object(internal.space)()),
                            (span = Object(internal.element)('span')),
                            default_slot && default_slot.c(),
                            Object(internal.attr)(span, 'class', 'btn-text'),
                            Object(internal.set_attributes)(
                                button,
                                button_data
                            ),
                            Object(internal.toggle_class)(
                                button,
                                'svelte-110x9av',
                                !0
                            )
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, button, anchor),
                            if_block && if_block.m(button, null),
                            Object(internal.append)(button, t),
                            Object(internal.append)(button, span),
                            default_slot && default_slot.m(span, null),
                            (current = !0),
                            (dispose = Object(internal.listen)(
                                button,
                                'click',
                                ctx[15]
                            ))
                    },
                    p(ctx, dirty) {
                        ctx[5] && if_block.p(ctx, dirty),
                            default_slot &&
                                default_slot.p &&
                                4096 & dirty &&
                                default_slot.p(
                                    Object(internal.get_slot_context)(
                                        default_slot_template,
                                        ctx,
                                        ctx[12],
                                        null
                                    ),
                                    Object(internal.get_slot_changes)(
                                        default_slot_template,
                                        ctx[12],
                                        dirty,
                                        null
                                    )
                                ),
                            Object(internal.set_attributes)(
                                button,
                                Object(
                                    internal.get_spread_update
                                )(button_levels, [
                                    64 & dirty && ctx[6],
                                    2 & dirty && { style: ctx[1] },
                                    4 & dirty && { disabled: ctx[2] },
                                    16 & dirty && { class: ctx[4] },
                                ])
                            ),
                            Object(internal.toggle_class)(
                                button,
                                'svelte-110x9av',
                                !0
                            )
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(if_block),
                            Object(internal.transition_in)(default_slot, local),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(if_block),
                            Object(internal.transition_out)(
                                default_slot,
                                local
                            ),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(button),
                            if_block && if_block.d(),
                            default_slot && default_slot.d(detaching),
                            dispose()
                    },
                }
            }
            function create_if_block(ctx) {
                let a,
                    t,
                    span,
                    current,
                    dispose,
                    if_block =
                        ctx[5] &&
                        (function create_if_block_1(ctx) {
                            let span, current
                            const icon_slot_template = ctx[13].icon,
                                icon_slot = Object(internal.create_slot)(
                                    icon_slot_template,
                                    ctx,
                                    ctx[12],
                                    get_icon_slot_context
                                )
                            return {
                                c() {
                                    ;(span = Object(internal.element)('span')),
                                        icon_slot && icon_slot.c(),
                                        Object(internal.set_style)(
                                            span,
                                            '--bg-color',
                                            iconBgColor(ctx[0])
                                        ),
                                        Object(internal.attr)(
                                            span,
                                            'class',
                                            'icon svelte-110x9av'
                                        )
                                },
                                m(target, anchor) {
                                    Object(internal.insert)(
                                        target,
                                        span,
                                        anchor
                                    ),
                                        icon_slot && icon_slot.m(span, null),
                                        (current = !0)
                                },
                                p(ctx, dirty) {
                                    icon_slot &&
                                        icon_slot.p &&
                                        4096 & dirty &&
                                        icon_slot.p(
                                            Object(internal.get_slot_context)(
                                                icon_slot_template,
                                                ctx,
                                                ctx[12],
                                                get_icon_slot_context
                                            ),
                                            Object(internal.get_slot_changes)(
                                                icon_slot_template,
                                                ctx[12],
                                                dirty,
                                                get_icon_slot_changes
                                            )
                                        ),
                                        (!current || 1 & dirty) &&
                                            Object(internal.set_style)(
                                                span,
                                                '--bg-color',
                                                iconBgColor(ctx[0])
                                            )
                                },
                                i(local) {
                                    current ||
                                        (Object(internal.transition_in)(
                                            icon_slot,
                                            local
                                        ),
                                        (current = !0))
                                },
                                o(local) {
                                    Object(internal.transition_out)(
                                        icon_slot,
                                        local
                                    ),
                                        (current = !1)
                                },
                                d(detaching) {
                                    detaching && Object(internal.detach)(span),
                                        icon_slot && icon_slot.d(detaching)
                                },
                            }
                        })(ctx)
                const default_slot_template = ctx[13].default,
                    default_slot = Object(internal.create_slot)(
                        default_slot_template,
                        ctx,
                        ctx[12],
                        null
                    )
                let a_levels = [
                        ctx[6],
                        { href: ctx[3] },
                        { style: ctx[1] },
                        { disabled: ctx[2] },
                        { class: ctx[4] },
                    ],
                    a_data = {}
                for (let i = 0; i < a_levels.length; i += 1)
                    a_data = Object(internal.assign)(a_data, a_levels[i])
                return {
                    c() {
                        ;(a = Object(internal.element)('a')),
                            if_block && if_block.c(),
                            (t = Object(internal.space)()),
                            (span = Object(internal.element)('span')),
                            default_slot && default_slot.c(),
                            Object(internal.attr)(span, 'class', 'btn-text'),
                            Object(internal.set_attributes)(a, a_data),
                            Object(internal.toggle_class)(
                                a,
                                'svelte-110x9av',
                                !0
                            )
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, a, anchor),
                            if_block && if_block.m(a, null),
                            Object(internal.append)(a, t),
                            Object(internal.append)(a, span),
                            default_slot && default_slot.m(span, null),
                            (current = !0),
                            (dispose = Object(internal.listen)(
                                a,
                                'click',
                                ctx[14]
                            ))
                    },
                    p(ctx, dirty) {
                        ctx[5] && if_block.p(ctx, dirty),
                            default_slot &&
                                default_slot.p &&
                                4096 & dirty &&
                                default_slot.p(
                                    Object(internal.get_slot_context)(
                                        default_slot_template,
                                        ctx,
                                        ctx[12],
                                        null
                                    ),
                                    Object(internal.get_slot_changes)(
                                        default_slot_template,
                                        ctx[12],
                                        dirty,
                                        null
                                    )
                                ),
                            Object(internal.set_attributes)(
                                a,
                                Object(internal.get_spread_update)(a_levels, [
                                    64 & dirty && ctx[6],
                                    8 & dirty && { href: ctx[3] },
                                    2 & dirty && { style: ctx[1] },
                                    4 & dirty && { disabled: ctx[2] },
                                    16 & dirty && { class: ctx[4] },
                                ])
                            ),
                            Object(internal.toggle_class)(
                                a,
                                'svelte-110x9av',
                                !0
                            )
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(if_block),
                            Object(internal.transition_in)(default_slot, local),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(if_block),
                            Object(internal.transition_out)(
                                default_slot,
                                local
                            ),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(a),
                            if_block && if_block.d(),
                            default_slot && default_slot.d(detaching),
                            dispose()
                    },
                }
            }
            function create_fragment(ctx) {
                let current_block_type_index, if_block, if_block_anchor, current
                const if_block_creators = [create_if_block, create_else_block],
                    if_blocks = []
                function select_block_type(ctx, dirty) {
                    return ctx[3] ? 0 : 1
                }
                return (
                    (current_block_type_index = select_block_type(ctx)),
                    (if_block = if_blocks[
                        current_block_type_index
                    ] = if_block_creators[current_block_type_index](ctx)),
                    {
                        c() {
                            if_block.c(),
                                (if_block_anchor = Object(internal.empty)())
                        },
                        m(target, anchor) {
                            if_blocks[current_block_type_index].m(
                                target,
                                anchor
                            ),
                                Object(internal.insert)(
                                    target,
                                    if_block_anchor,
                                    anchor
                                ),
                                (current = !0)
                        },
                        p(ctx, [dirty]) {
                            let previous_block_index = current_block_type_index
                            ;(current_block_type_index = select_block_type(
                                ctx
                            )),
                                current_block_type_index ===
                                previous_block_index
                                    ? if_blocks[current_block_type_index].p(
                                          ctx,
                                          dirty
                                      )
                                    : (Object(internal.group_outros)(),
                                      Object(internal.transition_out)(
                                          if_blocks[previous_block_index],
                                          1,
                                          1,
                                          () => {
                                              if_blocks[
                                                  previous_block_index
                                              ] = null
                                          }
                                      ),
                                      Object(internal.check_outros)(),
                                      (if_block =
                                          if_blocks[current_block_type_index]),
                                      if_block ||
                                          ((if_block = if_blocks[
                                              current_block_type_index
                                          ] = if_block_creators[
                                              current_block_type_index
                                          ](ctx)),
                                          if_block.c()),
                                      Object(internal.transition_in)(
                                          if_block,
                                          1
                                      ),
                                      if_block.m(
                                          if_block_anchor.parentNode,
                                          if_block_anchor
                                      ))
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(if_block),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(if_block),
                                (current = !1)
                        },
                        d(detaching) {
                            if_blocks[current_block_type_index].d(detaching),
                                detaching &&
                                    Object(internal.detach)(if_block_anchor)
                        },
                    }
                )
            }
            function iconBgColor(color) {
                return 'primary' === color
                    ? ' #0069d9'
                    : 'danger' === color
                    ? '#df2b1e'
                    : 'warning' === color
                    ? '#fda624'
                    : 'success' === color
                    ? '#218838'
                    : void 0
            }
            function instance($$self, $$props, $$invalidate) {
                let { class: cls = '' } = $$props,
                    { outline: outline = !1 } = $$props,
                    { block: block = !1 } = $$props,
                    { color: color = 'primary' } = $$props,
                    { style: style = '' } = $$props,
                    { disabled: disabled = !1 } = $$props,
                    { href: href = '' } = $$props,
                    { size: size = '' } = $$props
                const iconSlot = $$props.$$slots && 'icon' in $$props.$$slots,
                    props = (function getProps($$props) {
                        var props = {}
                        return (
                            Object.keys($$props).map(function(prop) {
                                'children' !== prop &&
                                    '$$scope' !== prop &&
                                    '$$slots' !== prop &&
                                    (props[prop] = $$props[prop])
                            }),
                            props
                        )
                    })($$props)
                let classNames,
                    { $$slots: $$slots = {}, $$scope: $$scope } = $$props
                return (
                    ($$self.$set = $$new_props => {
                        $$invalidate(
                            11,
                            ($$props = Object(internal.assign)(
                                Object(internal.assign)({}, $$props),
                                Object(internal.exclude_internal_props)(
                                    $$new_props
                                )
                            ))
                        ),
                            'class' in $$new_props &&
                                $$invalidate(7, (cls = $$new_props.class)),
                            'outline' in $$new_props &&
                                $$invalidate(
                                    8,
                                    (outline = $$new_props.outline)
                                ),
                            'block' in $$new_props &&
                                $$invalidate(9, (block = $$new_props.block)),
                            'color' in $$new_props &&
                                $$invalidate(0, (color = $$new_props.color)),
                            'style' in $$new_props &&
                                $$invalidate(1, (style = $$new_props.style)),
                            'disabled' in $$new_props &&
                                $$invalidate(
                                    2,
                                    (disabled = $$new_props.disabled)
                                ),
                            'href' in $$new_props &&
                                $$invalidate(3, (href = $$new_props.href)),
                            'size' in $$new_props &&
                                $$invalidate(10, (size = $$new_props.size)),
                            '$$scope' in $$new_props &&
                                $$invalidate(
                                    12,
                                    ($$scope = $$new_props.$$scope)
                                )
                    }),
                    ($$self.$$.update = () => {
                        1933 & $$self.$$.dirty &&
                            $$invalidate(
                                4,
                                (classNames = `${cls} btn btn-${color} \n    ${
                                    outline ? 'btn-outline-' + color : ''
                                } \n    ${
                                    size ? 'btn-size-' + size : ''
                                }\n    ${block ? 'btn-block' : ''}\n    ${
                                    href && disabled ? 'disabled' : ''
                                }\n    ${
                                    'rtl' === props.dir ? 'rtl' : 'ltr'
                                }\n    `)
                            )
                    }),
                    ($$props = Object(internal.exclude_internal_props)(
                        $$props
                    )),
                    [
                        color,
                        style,
                        disabled,
                        href,
                        classNames,
                        iconSlot,
                        props,
                        cls,
                        outline,
                        block,
                        size,
                        $$props,
                        $$scope,
                        $$slots,
                        function click_handler(event) {
                            Object(internal.bubble)($$self, event)
                        },
                        function click_handler_1(event) {
                            Object(internal.bubble)($$self, event)
                        },
                    ]
                )
            }
            class Button_svelte_Button extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        document.getElementById('svelte-110x9av-style') ||
                            (function add_css() {
                                var style = Object(internal.element)('style')
                                ;(style.id = 'svelte-110x9av-style'),
                                    (style.textContent =
                                        '.btn.svelte-110x9av.svelte-110x9av{--bg-color:$primary;background:none;border:none;font:inherit;cursor:pointer;outline:inherit;font-size:14px;line-height:1.5;border-radius:3px;padding:0.625rem 0.75rem;color:white;font-family:inherit;font-size:inherit;font-weight:bold;font-stretch:normal;font-style:normal;line-height:normal;text-align:center;position:relative;transition:0.4s cubic-bezier(0.4, 0, 0.2, 1);display:inline-flex;justify-content:center;align-items:center}.btn-primary.svelte-110x9av.svelte-110x9av{background-color:#2979ff;border:1px solid #2979ff}.btn-primary.svelte-110x9av.svelte-110x9av:not([disabled]):hover{background-color:#0069d9;border-color:#0062cc;color:#ffffff}.btn-primary.svelte-110x9av.svelte-110x9av:not([disabled]):active,.btn-primary.svelte-110x9av.svelte-110x9av:not([disabled]):focus{background-color:#0069d9;box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0.5);color:#ffffff}.btn-success.svelte-110x9av.svelte-110x9av{background-color:#43a047;border:1px solid #43a047}.btn-success.svelte-110x9av.svelte-110x9av:not([disabled]):hover{background-color:#218838;border-color:#1e7e34;color:#ffffff}.btn-success.svelte-110x9av.svelte-110x9av:not([disabled]):active,.btn-success.svelte-110x9av.svelte-110x9av:not([disabled]):focus{background-color:#218838;box-shadow:0 0 0 0.2rem rgba(40, 167, 69, 0.5);color:#ffffff}.btn-danger.svelte-110x9av.svelte-110x9av{background-color:#f44336;border:1px solid #f44336}.btn-danger.svelte-110x9av.svelte-110x9av:not([disabled]):hover{background-color:#df2b1e;border-color:#ec554a;color:#ffffff}.btn-danger.svelte-110x9av.svelte-110x9av:not([disabled]):active,.btn-danger.svelte-110x9av.svelte-110x9av:not([disabled]):focus{background-color:#df2b1e;box-shadow:0 0 0 0.2rem rgba(220, 53, 69, 0.5);color:#ffffff}.btn-warning.svelte-110x9av.svelte-110x9av{background-color:#ff9800;border:1px solid #ff9800}.btn-warning.svelte-110x9av.svelte-110x9av:not([disabled]):hover{background-color:#fda624;border-color:#f6bd13;color:#ffffff}.btn-warning.svelte-110x9av.svelte-110x9av:not([disabled]):active,.btn-warning.svelte-110x9av.svelte-110x9av:not([disabled]):focus{background-color:#fda624;box-shadow:0 0 0 0.2rem rgba(255, 193, 7, 0.5);color:#ffffff}.btn-outline-primary.svelte-110x9av.svelte-110x9av{background:none;border:1px solid #2979ff;color:#2979ff}.btn-outline-danger.svelte-110x9av.svelte-110x9av{background:none;border:1px solid #f44336;color:#f44336}.btn-outline-success.svelte-110x9av.svelte-110x9av{background:none;border:1px solid #43a047;color:#43a047}.btn-outline-warning.svelte-110x9av.svelte-110x9av{background:none;border:1px solid #ff9800;color:#ff9800}.btn-block.svelte-110x9av.svelte-110x9av{display:block;width:100%}.btn-size-md.svelte-110x9av.svelte-110x9av{min-width:340px}.btn-size-sm.svelte-110x9av.svelte-110x9av{min-width:164px}.btn-size-lg.svelte-110x9av.svelte-110x9av{min-width:640px}.btn.svelte-110x9av .icon.svelte-110x9av{width:24px;height:24px;border-radius:50%;background-color:var(--bg-color);margin-inline-end:4px;display:inline-flex;justify-content:center;align-items:center}.btn.btn-size-md.ltr.svelte-110x9av .icon.svelte-110x9av,.btn.btn-size-lg.ltr.svelte-110x9av .icon.svelte-110x9av{position:absolute;left:5%;top:50%;transform:translateY(-50%)}.btn.btn-size-md.rtl.svelte-110x9av .icon.svelte-110x9av,.btn.btn-size-lg.rtl.svelte-110x9av .icon.svelte-110x9av{position:absolute;right:5%;top:50%;transform:translateY(-50%)}a.svelte-110x9av.svelte-110x9av{text-decoration:none}button.svelte-110x9av.svelte-110x9av:disabled,a.disabled.svelte-110x9av.svelte-110x9av{background-color:rgba(0, 0, 0, 0.12);color:rgba(0, 0, 0, 0.26);pointer-events:none;cursor:default;border:none}button.svelte-110x9av.svelte-110x9av:disabled:hover,a.disabled.svelte-110x9av.svelte-110x9av:hover{background-color:none;color:none;box-shadow:none}span.icon.svelte-110x9av.svelte-110x9av *{max-width:16px;max-height:16px}'),
                                    Object(internal.append)(
                                        document.head,
                                        style
                                    )
                            })(),
                        Object(internal.init)(
                            this,
                            options,
                            instance,
                            create_fragment,
                            internal.safe_not_equal,
                            {
                                class: 7,
                                outline: 8,
                                block: 9,
                                color: 0,
                                style: 1,
                                disabled: 2,
                                href: 3,
                                size: 10,
                            }
                        )
                }
            }
            var Button_0 = Button_svelte_Button,
                transition = __webpack_require__(269)
            const get_footer_slot_changes = dirty => ({}),
                get_footer_slot_context = ctx => ({}),
                get_body_slot_changes = dirty => ({}),
                get_body_slot_context = ctx => ({}),
                get_header_slot_changes = dirty => ({}),
                get_header_slot_context = ctx => ({})
            function Modal_svelte_create_if_block(ctx) {
                let div3,
                    div2,
                    div1,
                    div0,
                    current_block_type_index,
                    if_block,
                    div1_class_value,
                    div1_transition,
                    div3_transition,
                    current,
                    dispose
                const if_block_creators = [
                        Modal_svelte_create_if_block_1,
                        Modal_svelte_create_else_block,
                    ],
                    if_blocks = []
                function select_block_type(ctx, dirty) {
                    return ctx[6] ? 1 : 0
                }
                return (
                    (current_block_type_index = select_block_type(ctx)),
                    (if_block = if_blocks[
                        current_block_type_index
                    ] = if_block_creators[current_block_type_index](ctx)),
                    {
                        c() {
                            ;(div3 = Object(internal.element)('div')),
                                (div2 = Object(internal.element)('div')),
                                (div1 = Object(internal.element)('div')),
                                (div0 = Object(internal.element)('div')),
                                if_block.c(),
                                Object(internal.attr)(
                                    div0,
                                    'class',
                                    'modal-content svelte-l7ga5h'
                                ),
                                Object(internal.attr)(
                                    div1,
                                    'class',
                                    (div1_class_value =
                                        'modal-window modal-size-' +
                                        ctx[1] +
                                        ' svelte-l7ga5h')
                                ),
                                Object(internal.attr)(
                                    div2,
                                    'class',
                                    'modal-window-wrap svelte-l7ga5h'
                                ),
                                Object(internal.attr)(
                                    div3,
                                    'class',
                                    'modal svelte-l7ga5h'
                                )
                        },
                        m(target, anchor) {
                            Object(internal.insert)(target, div3, anchor),
                                Object(internal.append)(div3, div2),
                                Object(internal.append)(div2, div1),
                                Object(internal.append)(div1, div0),
                                if_blocks[current_block_type_index].m(
                                    div0,
                                    null
                                ),
                                ctx[18](div2),
                                ctx[19](div3),
                                (current = !0),
                                (dispose = Object(internal.listen)(
                                    div3,
                                    'click',
                                    ctx[11]
                                ))
                        },
                        p(ctx, dirty) {
                            let previous_block_index = current_block_type_index
                            ;(current_block_type_index = select_block_type(
                                ctx
                            )),
                                current_block_type_index ===
                                previous_block_index
                                    ? if_blocks[current_block_type_index].p(
                                          ctx,
                                          dirty
                                      )
                                    : (Object(internal.group_outros)(),
                                      Object(internal.transition_out)(
                                          if_blocks[previous_block_index],
                                          1,
                                          1,
                                          () => {
                                              if_blocks[
                                                  previous_block_index
                                              ] = null
                                          }
                                      ),
                                      Object(internal.check_outros)(),
                                      (if_block =
                                          if_blocks[current_block_type_index]),
                                      if_block ||
                                          ((if_block = if_blocks[
                                              current_block_type_index
                                          ] = if_block_creators[
                                              current_block_type_index
                                          ](ctx)),
                                          if_block.c()),
                                      Object(internal.transition_in)(
                                          if_block,
                                          1
                                      ),
                                      if_block.m(div0, null)),
                                (!current ||
                                    (2 & dirty &&
                                        div1_class_value !==
                                            (div1_class_value =
                                                'modal-window modal-size-' +
                                                ctx[1] +
                                                ' svelte-l7ga5h'))) &&
                                    Object(internal.attr)(
                                        div1,
                                        'class',
                                        div1_class_value
                                    )
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(if_block),
                                Object(internal.add_render_callback)(() => {
                                    div1_transition ||
                                        (div1_transition = Object(
                                            internal.create_bidirectional_transition
                                        )(div1, ctx[10], ctx[5], !0)),
                                        div1_transition.run(1)
                                }),
                                Object(internal.add_render_callback)(() => {
                                    div3_transition ||
                                        (div3_transition = Object(
                                            internal.create_bidirectional_transition
                                        )(div3, ctx[9], ctx[4], !0)),
                                        div3_transition.run(1)
                                }),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(if_block),
                                div1_transition ||
                                    (div1_transition = Object(
                                        internal.create_bidirectional_transition
                                    )(div1, ctx[10], ctx[5], !1)),
                                div1_transition.run(0),
                                div3_transition ||
                                    (div3_transition = Object(
                                        internal.create_bidirectional_transition
                                    )(div3, ctx[9], ctx[4], !1)),
                                div3_transition.run(0),
                                (current = !1)
                        },
                        d(detaching) {
                            detaching && Object(internal.detach)(div3),
                                if_blocks[current_block_type_index].d(),
                                detaching &&
                                    div1_transition &&
                                    div1_transition.end(),
                                ctx[18](null),
                                ctx[19](null),
                                detaching &&
                                    div3_transition &&
                                    div3_transition.end(),
                                dispose()
                        },
                    }
                )
            }
            function Modal_svelte_create_else_block(ctx) {
                let div, current
                const default_slot_template = ctx[17].default,
                    default_slot = Object(internal.create_slot)(
                        default_slot_template,
                        ctx,
                        ctx[16],
                        null
                    )
                return {
                    c() {
                        ;(div = Object(internal.element)('div')),
                            default_slot && default_slot.c(),
                            Object(internal.attr)(
                                div,
                                'class',
                                'popup svelte-l7ga5h'
                            )
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, div, anchor),
                            default_slot && default_slot.m(div, null),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        default_slot &&
                            default_slot.p &&
                            65536 & dirty &&
                            default_slot.p(
                                Object(internal.get_slot_context)(
                                    default_slot_template,
                                    ctx,
                                    ctx[16],
                                    null
                                ),
                                Object(internal.get_slot_changes)(
                                    default_slot_template,
                                    ctx[16],
                                    dirty,
                                    null
                                )
                            )
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                default_slot,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(default_slot, local),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(div),
                            default_slot && default_slot.d(detaching)
                    },
                }
            }
            function Modal_svelte_create_if_block_1(ctx) {
                let div0, t0, t1, div1, t2, div2, current
                const header_slot_template = ctx[17].header,
                    header_slot = Object(internal.create_slot)(
                        header_slot_template,
                        ctx,
                        ctx[16],
                        get_header_slot_context
                    )
                let if_block = ctx[0] && Modal_svelte_create_if_block_2(ctx)
                const body_slot_template = ctx[17].body,
                    body_slot = Object(internal.create_slot)(
                        body_slot_template,
                        ctx,
                        ctx[16],
                        get_body_slot_context
                    ),
                    footer_slot_template = ctx[17].footer,
                    footer_slot = Object(internal.create_slot)(
                        footer_slot_template,
                        ctx,
                        ctx[16],
                        get_footer_slot_context
                    )
                return {
                    c() {
                        ;(div0 = Object(internal.element)('div')),
                            header_slot && header_slot.c(),
                            (t0 = Object(internal.space)()),
                            if_block && if_block.c(),
                            (t1 = Object(internal.space)()),
                            (div1 = Object(internal.element)('div')),
                            body_slot && body_slot.c(),
                            (t2 = Object(internal.space)()),
                            (div2 = Object(internal.element)('div')),
                            footer_slot && footer_slot.c(),
                            Object(internal.attr)(
                                div0,
                                'class',
                                'modal-header svelte-l7ga5h'
                            ),
                            Object(internal.attr)(
                                div1,
                                'class',
                                'modal-body svelte-l7ga5h'
                            ),
                            Object(internal.attr)(
                                div2,
                                'class',
                                'modal-footer svelte-l7ga5h'
                            )
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, div0, anchor),
                            header_slot && header_slot.m(div0, null),
                            Object(internal.append)(div0, t0),
                            if_block && if_block.m(div0, null),
                            Object(internal.insert)(target, t1, anchor),
                            Object(internal.insert)(target, div1, anchor),
                            body_slot && body_slot.m(div1, null),
                            Object(internal.insert)(target, t2, anchor),
                            Object(internal.insert)(target, div2, anchor),
                            footer_slot && footer_slot.m(div2, null),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        header_slot &&
                            header_slot.p &&
                            65536 & dirty &&
                            header_slot.p(
                                Object(internal.get_slot_context)(
                                    header_slot_template,
                                    ctx,
                                    ctx[16],
                                    get_header_slot_context
                                ),
                                Object(internal.get_slot_changes)(
                                    header_slot_template,
                                    ctx[16],
                                    dirty,
                                    get_header_slot_changes
                                )
                            ),
                            ctx[0]
                                ? if_block
                                    ? if_block.p(ctx, dirty)
                                    : ((if_block = Modal_svelte_create_if_block_2(
                                          ctx
                                      )),
                                      if_block.c(),
                                      if_block.m(div0, null))
                                : if_block &&
                                  (if_block.d(1), (if_block = null)),
                            body_slot &&
                                body_slot.p &&
                                65536 & dirty &&
                                body_slot.p(
                                    Object(internal.get_slot_context)(
                                        body_slot_template,
                                        ctx,
                                        ctx[16],
                                        get_body_slot_context
                                    ),
                                    Object(internal.get_slot_changes)(
                                        body_slot_template,
                                        ctx[16],
                                        dirty,
                                        get_body_slot_changes
                                    )
                                ),
                            footer_slot &&
                                footer_slot.p &&
                                65536 & dirty &&
                                footer_slot.p(
                                    Object(internal.get_slot_context)(
                                        footer_slot_template,
                                        ctx,
                                        ctx[16],
                                        get_footer_slot_context
                                    ),
                                    Object(internal.get_slot_changes)(
                                        footer_slot_template,
                                        ctx[16],
                                        dirty,
                                        get_footer_slot_changes
                                    )
                                )
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(header_slot, local),
                            Object(internal.transition_in)(body_slot, local),
                            Object(internal.transition_in)(footer_slot, local),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(header_slot, local),
                            Object(internal.transition_out)(body_slot, local),
                            Object(internal.transition_out)(footer_slot, local),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(div0),
                            header_slot && header_slot.d(detaching),
                            if_block && if_block.d(),
                            detaching && Object(internal.detach)(t1),
                            detaching && Object(internal.detach)(div1),
                            body_slot && body_slot.d(detaching),
                            detaching && Object(internal.detach)(t2),
                            detaching && Object(internal.detach)(div2),
                            footer_slot && footer_slot.d(detaching)
                    },
                }
            }
            function Modal_svelte_create_if_block_2(ctx) {
                let button, dispose
                return {
                    c() {
                        ;(button = Object(internal.element)('button')),
                            (button.textContent = '❌'),
                            Object(internal.attr)(
                                button,
                                'class',
                                'close svelte-l7ga5h'
                            )
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, button, anchor),
                            (dispose = Object(internal.listen)(
                                button,
                                'click',
                                function() {
                                    Object(internal.is_function)(ctx[3]) &&
                                        ctx[3].apply(this, arguments)
                                }
                            ))
                    },
                    p(new_ctx, dirty) {
                        ctx = new_ctx
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(button), dispose()
                    },
                }
            }
            function Modal_svelte_create_fragment(ctx) {
                let if_block_anchor,
                    current,
                    dispose,
                    if_block = ctx[2] && Modal_svelte_create_if_block(ctx)
                return {
                    c() {
                        if_block && if_block.c(),
                            (if_block_anchor = Object(internal.empty)())
                    },
                    m(target, anchor) {
                        if_block && if_block.m(target, anchor),
                            Object(internal.insert)(
                                target,
                                if_block_anchor,
                                anchor
                            ),
                            (current = !0),
                            (dispose = Object(internal.listen)(
                                window,
                                'keydown',
                                ctx[12]
                            ))
                    },
                    p(ctx, [dirty]) {
                        ctx[2]
                            ? if_block
                                ? (if_block.p(ctx, dirty),
                                  Object(internal.transition_in)(if_block, 1))
                                : ((if_block = Modal_svelte_create_if_block(
                                      ctx
                                  )),
                                  if_block.c(),
                                  Object(internal.transition_in)(if_block, 1),
                                  if_block.m(
                                      if_block_anchor.parentNode,
                                      if_block_anchor
                                  ))
                            : if_block &&
                              (Object(internal.group_outros)(),
                              Object(internal.transition_out)(
                                  if_block,
                                  1,
                                  1,
                                  () => {
                                      if_block = null
                                  }
                              ),
                              Object(internal.check_outros)())
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(if_block),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(if_block),
                            (current = !1)
                    },
                    d(detaching) {
                        if_block && if_block.d(detaching),
                            detaching &&
                                Object(internal.detach)(if_block_anchor),
                            dispose()
                    },
                }
            }
            function Modal_svelte_instance($$self, $$props, $$invalidate) {
                let background,
                    wrap,
                    { closeButton: closeButton = !0 } = $$props,
                    { closeOnOuter: closeOnOuter = !0 } = $$props,
                    { transitionBg: transitionBg = transition.a } = $$props,
                    { size: size = 'md' } = $$props,
                    { isOpened: isOpened = !1 } = $$props,
                    { toggle: toggle = () => {} } = $$props,
                    {
                        transitionBgProps: transitionBgProps = {
                            duration: 250,
                        },
                    } = $$props,
                    {
                        transitionWindow: transitionWindow = transitionBg,
                    } = $$props,
                    {
                        transitionWindowProps: transitionWindowProps = transitionBgProps,
                    } = $$props,
                    { popup: popup = !1 } = $$props
                let currentTransitionBg,
                    currentTransitionWindow,
                    { $$slots: $$slots = {}, $$scope: $$scope } = $$props
                return (
                    ($$self.$set = $$props => {
                        'closeButton' in $$props &&
                            $$invalidate(
                                0,
                                (closeButton = $$props.closeButton)
                            ),
                            'closeOnOuter' in $$props &&
                                $$invalidate(
                                    13,
                                    (closeOnOuter = $$props.closeOnOuter)
                                ),
                            'transitionBg' in $$props &&
                                $$invalidate(
                                    14,
                                    (transitionBg = $$props.transitionBg)
                                ),
                            'size' in $$props &&
                                $$invalidate(1, (size = $$props.size)),
                            'isOpened' in $$props &&
                                $$invalidate(2, (isOpened = $$props.isOpened)),
                            'toggle' in $$props &&
                                $$invalidate(3, (toggle = $$props.toggle)),
                            'transitionBgProps' in $$props &&
                                $$invalidate(
                                    4,
                                    (transitionBgProps =
                                        $$props.transitionBgProps)
                                ),
                            'transitionWindow' in $$props &&
                                $$invalidate(
                                    15,
                                    (transitionWindow =
                                        $$props.transitionWindow)
                                ),
                            'transitionWindowProps' in $$props &&
                                $$invalidate(
                                    5,
                                    (transitionWindowProps =
                                        $$props.transitionWindowProps)
                                ),
                            'popup' in $$props &&
                                $$invalidate(6, (popup = $$props.popup)),
                            '$$scope' in $$props &&
                                $$invalidate(16, ($$scope = $$props.$$scope))
                    }),
                    ($$self.$$.update = () => {
                        16384 & $$self.$$.dirty &&
                            $$invalidate(
                                9,
                                (currentTransitionBg = transitionBg)
                            ),
                            32768 & $$self.$$.dirty &&
                                $$invalidate(
                                    10,
                                    (currentTransitionWindow = transitionWindow)
                                )
                    }),
                    [
                        closeButton,
                        size,
                        isOpened,
                        toggle,
                        transitionBgProps,
                        transitionWindowProps,
                        popup,
                        background,
                        wrap,
                        currentTransitionBg,
                        currentTransitionWindow,
                        e => {
                            !closeOnOuter ||
                                (e.target !== background &&
                                    e.target !== wrap) ||
                                (e.preventDefault(), toggle())
                        },
                        e => {
                            'Escape' !== e.key || toggle()
                        },
                        closeOnOuter,
                        transitionBg,
                        transitionWindow,
                        $$scope,
                        $$slots,
                        function div2_binding($$value) {
                            internal.binding_callbacks[
                                $$value ? 'unshift' : 'push'
                            ](() => {
                                $$invalidate(8, (wrap = $$value))
                            })
                        },
                        function div3_binding($$value) {
                            internal.binding_callbacks[
                                $$value ? 'unshift' : 'push'
                            ](() => {
                                $$invalidate(7, (background = $$value))
                            })
                        },
                    ]
                )
            }
            class Modal_svelte_Modal extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        document.getElementById('svelte-l7ga5h-style') ||
                            (function Modal_svelte_add_css() {
                                var style = Object(internal.element)('style')
                                ;(style.id = 'svelte-l7ga5h-style'),
                                    (style.textContent =
                                        ".modal.svelte-l7ga5h{position:fixed;top:0;left:0;z-index:1000;display:flex;flex-direction:column;justify-content:center;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.66);height:100%}.modal-content.svelte-l7ga5h{position:relative;min-height:10rem;max-height:calc(100vh - 4rem);display:flex;flex-direction:column}.modal-header.svelte-l7ga5h{border-bottom:1px solid #e6ebf0;margin-bottom:16px;box-shadow:0 4px 8px -4px rgba(0, 0, 0, 0.15);padding:16px;display:flex;justify-content:space-between;align-items:center}.modal-header.svelte-l7ga5h *{margin:0}.modal-body.svelte-l7ga5h{flex:1 0 auto;padding:16px;max-height:10rem;overflow-y:scroll}.modal-body.svelte-l7ga5h *{margin:0}.modal-footer.svelte-l7ga5h{border-top:1px solid #e6ebf0;margin-top:16px;padding-top:16px;text-align:right;padding:16px;flex-shrink:0}.modal-footer.svelte-l7ga5h *{margin:0}.modal-body.svelte-l7ga5h::-webkit-scrollbar{display:none}.modal-size-sm.svelte-l7ga5h{width:480px}.modal-size-md.svelte-l7ga5h{width:40rem;max-width:100%;max-height:100%}.modal-size-lg.svelte-l7ga5h{width:60rem;max-width:100%;max-height:100%}.modal-window-wrap.svelte-l7ga5h{position:relative;margin:2rem;max-height:100%}.modal-window.svelte-l7ga5h{position:relative;max-width:100%;max-height:100%;margin:2rem auto;color:black;border-radius:5px;background:white}.close.svelte-l7ga5h{outline:none;border:none;background:none;-webkit-appearance:none;width:18px;color:transparent;text-shadow:0 0 #526576;font-weight:bold;font-family:Garamond, 'Apple Garamond';opacity:0.5;transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);z-index:1000}.close.svelte-l7ga5h:hover,.close.svelte-l7ga5h:focus,.close.svelte-l7ga5h:active{text-shadow:0 0 #3a3535}.popup.svelte-l7ga5h{padding:16px}"),
                                    Object(internal.append)(
                                        document.head,
                                        style
                                    )
                            })(),
                        Object(internal.init)(
                            this,
                            options,
                            Modal_svelte_instance,
                            Modal_svelte_create_fragment,
                            internal.safe_not_equal,
                            {
                                closeButton: 0,
                                closeOnOuter: 13,
                                transitionBg: 14,
                                size: 1,
                                isOpened: 2,
                                toggle: 3,
                                transitionBgProps: 4,
                                transitionWindow: 15,
                                transitionWindowProps: 5,
                                popup: 6,
                            }
                        )
                }
            }
            var Modal_0 = Modal_svelte_Modal
            __webpack_require__.d(__webpack_exports__, 'a', function() {
                return Button_0
            }),
                __webpack_require__.d(__webpack_exports__, 'b', function() {
                    return Modal_0
                })
        },
        267: function(module, __webpack_exports__, __webpack_require__) {
            'use strict'
            var internal = __webpack_require__(0),
                index = __webpack_require__(2)
            function get_each_context(ctx, list, i) {
                const child_ctx = ctx.slice()
                return (child_ctx[1] = list[i]), child_ctx
            }
            function create_default_slot(ctx) {
                let t,
                    t_value = ctx[1] + ''
                return {
                    c() {
                        t = Object(internal.text)(t_value)
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    p: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_each_block(ctx) {
                let current
                const button = new index.a({
                    props: {
                        color: ctx[1],
                        $$slots: { default: [create_default_slot] },
                        $$scope: { ctx: ctx },
                    },
                })
                return {
                    c() {
                        Object(internal.create_component)(button.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.mount_component)(
                            button,
                            target,
                            anchor
                        ),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        const button_changes = {}
                        16 & dirty &&
                            (button_changes.$$scope = {
                                dirty: dirty,
                                ctx: ctx,
                            }),
                            button.$set(button_changes)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        Object(internal.destroy_component)(button, detaching)
                    },
                }
            }
            function create_fragment(ctx) {
                let each_1_anchor,
                    current,
                    each_value = ctx[0],
                    each_blocks = []
                for (let i = 0; i < each_value.length; i += 1)
                    each_blocks[i] = create_each_block(
                        get_each_context(ctx, each_value, i)
                    )
                const out = i =>
                    Object(internal.transition_out)(
                        each_blocks[i],
                        1,
                        1,
                        () => {
                            each_blocks[i] = null
                        }
                    )
                return {
                    c() {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].c()
                        each_1_anchor = Object(internal.empty)()
                    },
                    m(target, anchor) {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].m(target, anchor)
                        Object(internal.insert)(target, each_1_anchor, anchor),
                            (current = !0)
                    },
                    p(ctx, [dirty]) {
                        if (1 & dirty) {
                            let i
                            for (
                                each_value = ctx[0], i = 0;
                                i < each_value.length;
                                i += 1
                            ) {
                                const child_ctx = get_each_context(
                                    ctx,
                                    each_value,
                                    i
                                )
                                each_blocks[i]
                                    ? (each_blocks[i].p(child_ctx, dirty),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ))
                                    : ((each_blocks[i] = create_each_block(
                                          child_ctx
                                      )),
                                      each_blocks[i].c(),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ),
                                      each_blocks[i].m(
                                          each_1_anchor.parentNode,
                                          each_1_anchor
                                      ))
                            }
                            for (
                                Object(internal.group_outros)(),
                                    i = each_value.length;
                                i < each_blocks.length;
                                i += 1
                            )
                                out(i)
                            Object(internal.check_outros)()
                        }
                    },
                    i(local) {
                        if (!current) {
                            for (let i = 0; i < each_value.length; i += 1)
                                Object(internal.transition_in)(each_blocks[i])
                            current = !0
                        }
                    },
                    o(local) {
                        each_blocks = each_blocks.filter(Boolean)
                        for (let i = 0; i < each_blocks.length; i += 1)
                            Object(internal.transition_out)(each_blocks[i])
                        current = !1
                    },
                    d(detaching) {
                        Object(internal.destroy_each)(each_blocks, detaching),
                            detaching && Object(internal.detach)(each_1_anchor)
                    },
                }
            }
            function instance($$self) {
                return [['primary', 'success', 'danger', 'warning']]
            }
            class Button_svelte_Button_1 extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            instance,
                            create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Button_svelte = Button_svelte_Button_1
            function Outline_svelte_get_each_context(ctx, list, i) {
                const child_ctx = ctx.slice()
                return (child_ctx[1] = list[i]), child_ctx
            }
            function Outline_svelte_create_default_slot(ctx) {
                let t,
                    t_value = ctx[1] + ''
                return {
                    c() {
                        t = Object(internal.text)(t_value)
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    p: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function Outline_svelte_create_each_block(ctx) {
                let current
                const button = new index.a({
                    props: {
                        outline: !0,
                        color: ctx[1],
                        $$slots: {
                            default: [Outline_svelte_create_default_slot],
                        },
                        $$scope: { ctx: ctx },
                    },
                })
                return {
                    c() {
                        Object(internal.create_component)(button.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.mount_component)(
                            button,
                            target,
                            anchor
                        ),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        const button_changes = {}
                        16 & dirty &&
                            (button_changes.$$scope = {
                                dirty: dirty,
                                ctx: ctx,
                            }),
                            button.$set(button_changes)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        Object(internal.destroy_component)(button, detaching)
                    },
                }
            }
            function Outline_svelte_create_fragment(ctx) {
                let each_1_anchor,
                    current,
                    each_value = ctx[0],
                    each_blocks = []
                for (let i = 0; i < each_value.length; i += 1)
                    each_blocks[i] = Outline_svelte_create_each_block(
                        Outline_svelte_get_each_context(ctx, each_value, i)
                    )
                const out = i =>
                    Object(internal.transition_out)(
                        each_blocks[i],
                        1,
                        1,
                        () => {
                            each_blocks[i] = null
                        }
                    )
                return {
                    c() {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].c()
                        each_1_anchor = Object(internal.empty)()
                    },
                    m(target, anchor) {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].m(target, anchor)
                        Object(internal.insert)(target, each_1_anchor, anchor),
                            (current = !0)
                    },
                    p(ctx, [dirty]) {
                        if (1 & dirty) {
                            let i
                            for (
                                each_value = ctx[0], i = 0;
                                i < each_value.length;
                                i += 1
                            ) {
                                const child_ctx = Outline_svelte_get_each_context(
                                    ctx,
                                    each_value,
                                    i
                                )
                                each_blocks[i]
                                    ? (each_blocks[i].p(child_ctx, dirty),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ))
                                    : ((each_blocks[
                                          i
                                      ] = Outline_svelte_create_each_block(
                                          child_ctx
                                      )),
                                      each_blocks[i].c(),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ),
                                      each_blocks[i].m(
                                          each_1_anchor.parentNode,
                                          each_1_anchor
                                      ))
                            }
                            for (
                                Object(internal.group_outros)(),
                                    i = each_value.length;
                                i < each_blocks.length;
                                i += 1
                            )
                                out(i)
                            Object(internal.check_outros)()
                        }
                    },
                    i(local) {
                        if (!current) {
                            for (let i = 0; i < each_value.length; i += 1)
                                Object(internal.transition_in)(each_blocks[i])
                            current = !0
                        }
                    },
                    o(local) {
                        each_blocks = each_blocks.filter(Boolean)
                        for (let i = 0; i < each_blocks.length; i += 1)
                            Object(internal.transition_out)(each_blocks[i])
                        current = !1
                    },
                    d(detaching) {
                        Object(internal.destroy_each)(each_blocks, detaching),
                            detaching && Object(internal.detach)(each_1_anchor)
                    },
                }
            }
            function Outline_svelte_instance($$self) {
                return [['primary', 'success', 'danger', 'warning']]
            }
            class Outline_svelte_Outline extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            Outline_svelte_instance,
                            Outline_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Outline_svelte = Outline_svelte_Outline
            function Icon_svelte_get_each_context(ctx, list, i) {
                const child_ctx = ctx.slice()
                return (child_ctx[1] = list[i]), child_ctx
            }
            function create_icon_slot(ctx) {
                let svg, defs, path, g, use
                return {
                    c() {
                        ;(svg = Object(internal.svg_element)('svg')),
                            (defs = Object(internal.svg_element)('defs')),
                            (path = Object(internal.svg_element)('path')),
                            (g = Object(internal.svg_element)('g')),
                            (use = Object(internal.svg_element)('use')),
                            Object(internal.attr)(path, 'id', 'prefix__a'),
                            Object(internal.attr)(
                                path,
                                'd',
                                'M14.707\n                    6.707l-.045.043-.027.023c-.116.095-.254.165-.406.2l-.112.02c-.037.005-.074.007-.111.007H9c-.552\n                    0-1-.448-1-1s.448-1 1-1h3.155C11.073 3.735 9.603 3 8 3 4.686\n                    3 2 5.686 2 9s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1\n                    .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.892\n                    0 3.632.734 5 1.999V1c0-.552.448-1 1-1s1 .448 1 1v4.994c0\n                    .033-.001.067-.004.1l-.009.066c-.003.02-.007.042-.012.062-.012.055-.03.109-.05.16l-.022.048c-.027.056-.058.109-.094.158l-.02.027-.02.024c-.015.019-.031.037-.048.054l-.014.014z'
                            ),
                            Object(internal.attr)(use, 'fill', 'white'),
                            Object(internal.attr)(use, 'fill-rule', 'nonzero'),
                            Object(internal.xlink_attr)(
                                use,
                                'xlink:href',
                                '#prefix__a'
                            ),
                            Object(internal.attr)(svg, 'slot', 'icon'),
                            Object(internal.attr)(svg, 'fill', 'white'),
                            Object(internal.attr)(
                                svg,
                                'xmlns',
                                'http://www.w3.org/2000/svg'
                            ),
                            Object(internal.attr)(
                                svg,
                                'xmlns:xlink',
                                'http://www.w3.org/1999/xlink'
                            ),
                            Object(internal.attr)(svg, 'width', '50'),
                            Object(internal.attr)(svg, 'height', '50'),
                            Object(internal.attr)(svg, 'viewBox', '0 0 16 17')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, svg, anchor),
                            Object(internal.append)(svg, defs),
                            Object(internal.append)(defs, path),
                            Object(internal.append)(svg, g),
                            Object(internal.append)(g, use)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(svg)
                    },
                }
            }
            function Icon_svelte_create_default_slot(ctx) {
                let t0,
                    t1,
                    t2,
                    t1_value = ctx[1] + ''
                return {
                    c() {
                        ;(t0 = Object(internal.space)()),
                            (t1 = Object(internal.text)(t1_value)),
                            (t2 = Object(internal.space)())
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, t1, anchor),
                            Object(internal.insert)(target, t2, anchor)
                    },
                    p: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(t1),
                            detaching && Object(internal.detach)(t2)
                    },
                }
            }
            function Icon_svelte_create_each_block(ctx) {
                let current
                const button = new index.a({
                    props: {
                        color: ctx[1],
                        $$slots: {
                            default: [Icon_svelte_create_default_slot],
                            icon: [create_icon_slot],
                        },
                        $$scope: { ctx: ctx },
                    },
                })
                return {
                    c() {
                        Object(internal.create_component)(button.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.mount_component)(
                            button,
                            target,
                            anchor
                        ),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        const button_changes = {}
                        16 & dirty &&
                            (button_changes.$$scope = {
                                dirty: dirty,
                                ctx: ctx,
                            }),
                            button.$set(button_changes)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        Object(internal.destroy_component)(button, detaching)
                    },
                }
            }
            function Icon_svelte_create_fragment(ctx) {
                let each_1_anchor,
                    current,
                    each_value = ctx[0],
                    each_blocks = []
                for (let i = 0; i < each_value.length; i += 1)
                    each_blocks[i] = Icon_svelte_create_each_block(
                        Icon_svelte_get_each_context(ctx, each_value, i)
                    )
                const out = i =>
                    Object(internal.transition_out)(
                        each_blocks[i],
                        1,
                        1,
                        () => {
                            each_blocks[i] = null
                        }
                    )
                return {
                    c() {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].c()
                        each_1_anchor = Object(internal.empty)()
                    },
                    m(target, anchor) {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].m(target, anchor)
                        Object(internal.insert)(target, each_1_anchor, anchor),
                            (current = !0)
                    },
                    p(ctx, [dirty]) {
                        if (1 & dirty) {
                            let i
                            for (
                                each_value = ctx[0], i = 0;
                                i < each_value.length;
                                i += 1
                            ) {
                                const child_ctx = Icon_svelte_get_each_context(
                                    ctx,
                                    each_value,
                                    i
                                )
                                each_blocks[i]
                                    ? (each_blocks[i].p(child_ctx, dirty),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ))
                                    : ((each_blocks[
                                          i
                                      ] = Icon_svelte_create_each_block(
                                          child_ctx
                                      )),
                                      each_blocks[i].c(),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ),
                                      each_blocks[i].m(
                                          each_1_anchor.parentNode,
                                          each_1_anchor
                                      ))
                            }
                            for (
                                Object(internal.group_outros)(),
                                    i = each_value.length;
                                i < each_blocks.length;
                                i += 1
                            )
                                out(i)
                            Object(internal.check_outros)()
                        }
                    },
                    i(local) {
                        if (!current) {
                            for (let i = 0; i < each_value.length; i += 1)
                                Object(internal.transition_in)(each_blocks[i])
                            current = !0
                        }
                    },
                    o(local) {
                        each_blocks = each_blocks.filter(Boolean)
                        for (let i = 0; i < each_blocks.length; i += 1)
                            Object(internal.transition_out)(each_blocks[i])
                        current = !1
                    },
                    d(detaching) {
                        Object(internal.destroy_each)(each_blocks, detaching),
                            detaching && Object(internal.detach)(each_1_anchor)
                    },
                }
            }
            function Icon_svelte_instance($$self) {
                return [['primary', 'success', 'danger', 'warning']]
            }
            class Icon_svelte_Icon extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            Icon_svelte_instance,
                            Icon_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Icon_svelte = Icon_svelte_Icon
            function Size_svelte_get_each_context(ctx, list, i) {
                const child_ctx = ctx.slice()
                return (child_ctx[1] = list[i]), child_ctx
            }
            function get_each_context_1(ctx, list, i) {
                const child_ctx = ctx.slice()
                return (child_ctx[1] = list[i]), child_ctx
            }
            function create_default_slot_1(ctx) {
                let t,
                    t_value = ctx[1] + ''
                return {
                    c() {
                        t = Object(internal.text)(t_value)
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    p: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_each_block_1(ctx) {
                let current
                const button = new index.a({
                    props: {
                        size: 'md',
                        color: ctx[1],
                        $$slots: { default: [create_default_slot_1] },
                        $$scope: { ctx: ctx },
                    },
                })
                return {
                    c() {
                        Object(internal.create_component)(button.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.mount_component)(
                            button,
                            target,
                            anchor
                        ),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        const button_changes = {}
                        64 & dirty &&
                            (button_changes.$$scope = {
                                dirty: dirty,
                                ctx: ctx,
                            }),
                            button.$set(button_changes)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        Object(internal.destroy_component)(button, detaching)
                    },
                }
            }
            function Size_svelte_create_icon_slot(ctx) {
                let svg, defs, path, g, use
                return {
                    c() {
                        ;(svg = Object(internal.svg_element)('svg')),
                            (defs = Object(internal.svg_element)('defs')),
                            (path = Object(internal.svg_element)('path')),
                            (g = Object(internal.svg_element)('g')),
                            (use = Object(internal.svg_element)('use')),
                            Object(internal.attr)(path, 'id', 'prefix__a'),
                            Object(internal.attr)(
                                path,
                                'd',
                                'M14.707\n                    6.707l-.045.043-.027.023c-.116.095-.254.165-.406.2l-.112.02c-.037.005-.074.007-.111.007H9c-.552\n                    0-1-.448-1-1s.448-1 1-1h3.155C11.073 3.735 9.603 3 8 3 4.686\n                    3 2 5.686 2 9s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1\n                    .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.892\n                    0 3.632.734 5 1.999V1c0-.552.448-1 1-1s1 .448 1 1v4.994c0\n                    .033-.001.067-.004.1l-.009.066c-.003.02-.007.042-.012.062-.012.055-.03.109-.05.16l-.022.048c-.027.056-.058.109-.094.158l-.02.027-.02.024c-.015.019-.031.037-.048.054l-.014.014z'
                            ),
                            Object(internal.attr)(use, 'fill', 'white'),
                            Object(internal.attr)(use, 'fill-rule', 'nonzero'),
                            Object(internal.xlink_attr)(
                                use,
                                'xlink:href',
                                '#prefix__a'
                            ),
                            Object(internal.attr)(svg, 'slot', 'icon'),
                            Object(internal.attr)(svg, 'fill', 'white'),
                            Object(internal.attr)(
                                svg,
                                'xmlns',
                                'http://www.w3.org/2000/svg'
                            ),
                            Object(internal.attr)(
                                svg,
                                'xmlns:xlink',
                                'http://www.w3.org/1999/xlink'
                            ),
                            Object(internal.attr)(svg, 'width', '50'),
                            Object(internal.attr)(svg, 'height', '50'),
                            Object(internal.attr)(svg, 'viewBox', '0 0 16 17')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, svg, anchor),
                            Object(internal.append)(svg, defs),
                            Object(internal.append)(defs, path),
                            Object(internal.append)(svg, g),
                            Object(internal.append)(g, use)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(svg)
                    },
                }
            }
            function Size_svelte_create_default_slot(ctx) {
                let t0,
                    t1,
                    t2,
                    t1_value = ctx[1] + ''
                return {
                    c() {
                        ;(t0 = Object(internal.space)()),
                            (t1 = Object(internal.text)(t1_value)),
                            (t2 = Object(internal.space)())
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, t1, anchor),
                            Object(internal.insert)(target, t2, anchor)
                    },
                    p: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(t1),
                            detaching && Object(internal.detach)(t2)
                    },
                }
            }
            function Size_svelte_create_each_block(ctx) {
                let current
                const button = new index.a({
                    props: {
                        size: 'md',
                        color: ctx[1],
                        icon: !0,
                        $$slots: {
                            default: [Size_svelte_create_default_slot],
                            icon: [Size_svelte_create_icon_slot],
                        },
                        $$scope: { ctx: ctx },
                    },
                })
                return {
                    c() {
                        Object(internal.create_component)(button.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.mount_component)(
                            button,
                            target,
                            anchor
                        ),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        const button_changes = {}
                        64 & dirty &&
                            (button_changes.$$scope = {
                                dirty: dirty,
                                ctx: ctx,
                            }),
                            button.$set(button_changes)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        Object(internal.destroy_component)(button, detaching)
                    },
                }
            }
            function Size_svelte_create_fragment(ctx) {
                let t0,
                    br0,
                    t1,
                    br1,
                    t2,
                    each1_anchor,
                    current,
                    each_value_1 = ctx[0],
                    each_blocks_1 = []
                for (let i = 0; i < each_value_1.length; i += 1)
                    each_blocks_1[i] = create_each_block_1(
                        get_each_context_1(ctx, each_value_1, i)
                    )
                const out = i =>
                    Object(internal.transition_out)(
                        each_blocks_1[i],
                        1,
                        1,
                        () => {
                            each_blocks_1[i] = null
                        }
                    )
                let each_value = ctx[0],
                    each_blocks = []
                for (let i = 0; i < each_value.length; i += 1)
                    each_blocks[i] = Size_svelte_create_each_block(
                        Size_svelte_get_each_context(ctx, each_value, i)
                    )
                const out_1 = i =>
                    Object(internal.transition_out)(
                        each_blocks[i],
                        1,
                        1,
                        () => {
                            each_blocks[i] = null
                        }
                    )
                return {
                    c() {
                        for (let i = 0; i < each_blocks_1.length; i += 1)
                            each_blocks_1[i].c()
                        ;(t0 = Object(internal.space)()),
                            (br0 = Object(internal.element)('br')),
                            (t1 = Object(internal.space)()),
                            (br1 = Object(internal.element)('br')),
                            (t2 = Object(internal.space)())
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].c()
                        each1_anchor = Object(internal.empty)()
                    },
                    m(target, anchor) {
                        for (let i = 0; i < each_blocks_1.length; i += 1)
                            each_blocks_1[i].m(target, anchor)
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, br0, anchor),
                            Object(internal.insert)(target, t1, anchor),
                            Object(internal.insert)(target, br1, anchor),
                            Object(internal.insert)(target, t2, anchor)
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].m(target, anchor)
                        Object(internal.insert)(target, each1_anchor, anchor),
                            (current = !0)
                    },
                    p(ctx, [dirty]) {
                        if (1 & dirty) {
                            let i
                            for (
                                each_value_1 = ctx[0], i = 0;
                                i < each_value_1.length;
                                i += 1
                            ) {
                                const child_ctx = get_each_context_1(
                                    ctx,
                                    each_value_1,
                                    i
                                )
                                each_blocks_1[i]
                                    ? (each_blocks_1[i].p(child_ctx, dirty),
                                      Object(internal.transition_in)(
                                          each_blocks_1[i],
                                          1
                                      ))
                                    : ((each_blocks_1[i] = create_each_block_1(
                                          child_ctx
                                      )),
                                      each_blocks_1[i].c(),
                                      Object(internal.transition_in)(
                                          each_blocks_1[i],
                                          1
                                      ),
                                      each_blocks_1[i].m(t0.parentNode, t0))
                            }
                            for (
                                Object(internal.group_outros)(),
                                    i = each_value_1.length;
                                i < each_blocks_1.length;
                                i += 1
                            )
                                out(i)
                            Object(internal.check_outros)()
                        }
                        if (1 & dirty) {
                            let i
                            for (
                                each_value = ctx[0], i = 0;
                                i < each_value.length;
                                i += 1
                            ) {
                                const child_ctx = Size_svelte_get_each_context(
                                    ctx,
                                    each_value,
                                    i
                                )
                                each_blocks[i]
                                    ? (each_blocks[i].p(child_ctx, dirty),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ))
                                    : ((each_blocks[
                                          i
                                      ] = Size_svelte_create_each_block(
                                          child_ctx
                                      )),
                                      each_blocks[i].c(),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ),
                                      each_blocks[i].m(
                                          each1_anchor.parentNode,
                                          each1_anchor
                                      ))
                            }
                            for (
                                Object(internal.group_outros)(),
                                    i = each_value.length;
                                i < each_blocks.length;
                                i += 1
                            )
                                out_1(i)
                            Object(internal.check_outros)()
                        }
                    },
                    i(local) {
                        if (!current) {
                            for (let i = 0; i < each_value_1.length; i += 1)
                                Object(internal.transition_in)(each_blocks_1[i])
                            for (let i = 0; i < each_value.length; i += 1)
                                Object(internal.transition_in)(each_blocks[i])
                            current = !0
                        }
                    },
                    o(local) {
                        each_blocks_1 = each_blocks_1.filter(Boolean)
                        for (let i = 0; i < each_blocks_1.length; i += 1)
                            Object(internal.transition_out)(each_blocks_1[i])
                        each_blocks = each_blocks.filter(Boolean)
                        for (let i = 0; i < each_blocks.length; i += 1)
                            Object(internal.transition_out)(each_blocks[i])
                        current = !1
                    },
                    d(detaching) {
                        Object(internal.destroy_each)(each_blocks_1, detaching),
                            detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(br0),
                            detaching && Object(internal.detach)(t1),
                            detaching && Object(internal.detach)(br1),
                            detaching && Object(internal.detach)(t2),
                            Object(internal.destroy_each)(
                                each_blocks,
                                detaching
                            ),
                            detaching && Object(internal.detach)(each1_anchor)
                    },
                }
            }
            function Size_svelte_instance($$self) {
                return [['primary', 'success', 'danger', 'warning']]
            }
            class Size_svelte_Size extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            Size_svelte_instance,
                            Size_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Size_svelte = Size_svelte_Size
            function Disabled_svelte_create_default_slot(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('Disabled')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function Disabled_svelte_create_fragment(ctx) {
                let current
                const button = new index.a({
                    props: {
                        disabled: !0,
                        color: 'primary',
                        $$slots: {
                            default: [Disabled_svelte_create_default_slot],
                        },
                        $$scope: { ctx: ctx },
                    },
                })
                return {
                    c() {
                        Object(internal.create_component)(button.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.mount_component)(
                            button,
                            target,
                            anchor
                        ),
                            (current = !0)
                    },
                    p(ctx, [dirty]) {
                        const button_changes = {}
                        1 & dirty &&
                            (button_changes.$$scope = {
                                dirty: dirty,
                                ctx: ctx,
                            }),
                            button.$set(button_changes)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        Object(internal.destroy_component)(button, detaching)
                    },
                }
            }
            class Disabled_svelte_Disabled extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            null,
                            Disabled_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Disabled_svelte = Disabled_svelte_Disabled
            function Link_svelte_get_each_context(ctx, list, i) {
                const child_ctx = ctx.slice()
                return (child_ctx[1] = list[i]), child_ctx
            }
            function Link_svelte_create_default_slot(ctx) {
                let t0,
                    t1,
                    t0_value = ctx[1] + ''
                return {
                    c() {
                        ;(t0 = Object(internal.text)(t0_value)),
                            (t1 = Object(internal.text)(' link\n    '))
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, t1, anchor)
                    },
                    p: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(t1)
                    },
                }
            }
            function Link_svelte_create_each_block(ctx) {
                let current
                const button = new index.a({
                    props: {
                        href: '/',
                        target: '__blank',
                        rel: 'noreferrer noopener',
                        color: ctx[1],
                        $$slots: { default: [Link_svelte_create_default_slot] },
                        $$scope: { ctx: ctx },
                    },
                })
                return {
                    c() {
                        Object(internal.create_component)(button.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.mount_component)(
                            button,
                            target,
                            anchor
                        ),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        const button_changes = {}
                        16 & dirty &&
                            (button_changes.$$scope = {
                                dirty: dirty,
                                ctx: ctx,
                            }),
                            button.$set(button_changes)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        Object(internal.destroy_component)(button, detaching)
                    },
                }
            }
            function Link_svelte_create_fragment(ctx) {
                let each_1_anchor,
                    current,
                    each_value = ctx[0],
                    each_blocks = []
                for (let i = 0; i < each_value.length; i += 1)
                    each_blocks[i] = Link_svelte_create_each_block(
                        Link_svelte_get_each_context(ctx, each_value, i)
                    )
                const out = i =>
                    Object(internal.transition_out)(
                        each_blocks[i],
                        1,
                        1,
                        () => {
                            each_blocks[i] = null
                        }
                    )
                return {
                    c() {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].c()
                        each_1_anchor = Object(internal.empty)()
                    },
                    m(target, anchor) {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].m(target, anchor)
                        Object(internal.insert)(target, each_1_anchor, anchor),
                            (current = !0)
                    },
                    p(ctx, [dirty]) {
                        if (1 & dirty) {
                            let i
                            for (
                                each_value = ctx[0], i = 0;
                                i < each_value.length;
                                i += 1
                            ) {
                                const child_ctx = Link_svelte_get_each_context(
                                    ctx,
                                    each_value,
                                    i
                                )
                                each_blocks[i]
                                    ? (each_blocks[i].p(child_ctx, dirty),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ))
                                    : ((each_blocks[
                                          i
                                      ] = Link_svelte_create_each_block(
                                          child_ctx
                                      )),
                                      each_blocks[i].c(),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ),
                                      each_blocks[i].m(
                                          each_1_anchor.parentNode,
                                          each_1_anchor
                                      ))
                            }
                            for (
                                Object(internal.group_outros)(),
                                    i = each_value.length;
                                i < each_blocks.length;
                                i += 1
                            )
                                out(i)
                            Object(internal.check_outros)()
                        }
                    },
                    i(local) {
                        if (!current) {
                            for (let i = 0; i < each_value.length; i += 1)
                                Object(internal.transition_in)(each_blocks[i])
                            current = !0
                        }
                    },
                    o(local) {
                        each_blocks = each_blocks.filter(Boolean)
                        for (let i = 0; i < each_blocks.length; i += 1)
                            Object(internal.transition_out)(each_blocks[i])
                        current = !1
                    },
                    d(detaching) {
                        Object(internal.destroy_each)(each_blocks, detaching),
                            detaching && Object(internal.detach)(each_1_anchor)
                    },
                }
            }
            function Link_svelte_instance($$self) {
                return [['primary', 'success', 'danger', 'warning']]
            }
            class Link_svelte_Link extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            Link_svelte_instance,
                            Link_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Link_svelte = Link_svelte_Link
            function RTL_svelte_get_each_context(ctx, list, i) {
                const child_ctx = ctx.slice()
                return (child_ctx[1] = list[i]), child_ctx
            }
            function RTL_svelte_create_icon_slot(ctx) {
                let svg, defs, path, g, use
                return {
                    c() {
                        ;(svg = Object(internal.svg_element)('svg')),
                            (defs = Object(internal.svg_element)('defs')),
                            (path = Object(internal.svg_element)('path')),
                            (g = Object(internal.svg_element)('g')),
                            (use = Object(internal.svg_element)('use')),
                            Object(internal.attr)(path, 'id', 'prefix__a'),
                            Object(internal.attr)(
                                path,
                                'd',
                                'M14.707\n                    6.707l-.045.043-.027.023c-.116.095-.254.165-.406.2l-.112.02c-.037.005-.074.007-.111.007H9c-.552\n                    0-1-.448-1-1s.448-1 1-1h3.155C11.073 3.735 9.603 3 8 3 4.686\n                    3 2 5.686 2 9s2.686 6 6 6 6-2.686 6-6c0-.552.448-1 1-1s1\n                    .448 1 1c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8c1.892\n                    0 3.632.734 5 1.999V1c0-.552.448-1 1-1s1 .448 1 1v4.994c0\n                    .033-.001.067-.004.1l-.009.066c-.003.02-.007.042-.012.062-.012.055-.03.109-.05.16l-.022.048c-.027.056-.058.109-.094.158l-.02.027-.02.024c-.015.019-.031.037-.048.054l-.014.014z'
                            ),
                            Object(internal.attr)(use, 'fill', 'white'),
                            Object(internal.attr)(use, 'fill-rule', 'nonzero'),
                            Object(internal.xlink_attr)(
                                use,
                                'xlink:href',
                                '#prefix__a'
                            ),
                            Object(internal.attr)(svg, 'slot', 'icon'),
                            Object(internal.attr)(svg, 'fill', 'white'),
                            Object(internal.attr)(
                                svg,
                                'xmlns',
                                'http://www.w3.org/2000/svg'
                            ),
                            Object(internal.attr)(
                                svg,
                                'xmlns:xlink',
                                'http://www.w3.org/1999/xlink'
                            ),
                            Object(internal.attr)(svg, 'width', '50'),
                            Object(internal.attr)(svg, 'height', '50'),
                            Object(internal.attr)(svg, 'viewBox', '0 0 16 17')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, svg, anchor),
                            Object(internal.append)(svg, defs),
                            Object(internal.append)(defs, path),
                            Object(internal.append)(svg, g),
                            Object(internal.append)(g, use)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(svg)
                    },
                }
            }
            function RTL_svelte_create_default_slot(ctx) {
                let t0,
                    t1,
                    t2,
                    t1_value = ctx[1] + ''
                return {
                    c() {
                        ;(t0 = Object(internal.space)()),
                            (t1 = Object(internal.text)(t1_value)),
                            (t2 = Object(internal.space)())
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, t1, anchor),
                            Object(internal.insert)(target, t2, anchor)
                    },
                    p: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(t1),
                            detaching && Object(internal.detach)(t2)
                    },
                }
            }
            function RTL_svelte_create_each_block(ctx) {
                let current
                const button = new index.a({
                    props: {
                        size: 'md',
                        dir: 'rtl',
                        color: ctx[1],
                        $$slots: {
                            default: [RTL_svelte_create_default_slot],
                            icon: [RTL_svelte_create_icon_slot],
                        },
                        $$scope: { ctx: ctx },
                    },
                })
                return {
                    c() {
                        Object(internal.create_component)(button.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.mount_component)(
                            button,
                            target,
                            anchor
                        ),
                            (current = !0)
                    },
                    p(ctx, dirty) {
                        const button_changes = {}
                        16 & dirty &&
                            (button_changes.$$scope = {
                                dirty: dirty,
                                ctx: ctx,
                            }),
                            button.$set(button_changes)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        Object(internal.destroy_component)(button, detaching)
                    },
                }
            }
            function RTL_svelte_create_fragment(ctx) {
                let each_1_anchor,
                    current,
                    each_value = ctx[0],
                    each_blocks = []
                for (let i = 0; i < each_value.length; i += 1)
                    each_blocks[i] = RTL_svelte_create_each_block(
                        RTL_svelte_get_each_context(ctx, each_value, i)
                    )
                const out = i =>
                    Object(internal.transition_out)(
                        each_blocks[i],
                        1,
                        1,
                        () => {
                            each_blocks[i] = null
                        }
                    )
                return {
                    c() {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].c()
                        each_1_anchor = Object(internal.empty)()
                    },
                    m(target, anchor) {
                        for (let i = 0; i < each_blocks.length; i += 1)
                            each_blocks[i].m(target, anchor)
                        Object(internal.insert)(target, each_1_anchor, anchor),
                            (current = !0)
                    },
                    p(ctx, [dirty]) {
                        if (1 & dirty) {
                            let i
                            for (
                                each_value = ctx[0], i = 0;
                                i < each_value.length;
                                i += 1
                            ) {
                                const child_ctx = RTL_svelte_get_each_context(
                                    ctx,
                                    each_value,
                                    i
                                )
                                each_blocks[i]
                                    ? (each_blocks[i].p(child_ctx, dirty),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ))
                                    : ((each_blocks[
                                          i
                                      ] = RTL_svelte_create_each_block(
                                          child_ctx
                                      )),
                                      each_blocks[i].c(),
                                      Object(internal.transition_in)(
                                          each_blocks[i],
                                          1
                                      ),
                                      each_blocks[i].m(
                                          each_1_anchor.parentNode,
                                          each_1_anchor
                                      ))
                            }
                            for (
                                Object(internal.group_outros)(),
                                    i = each_value.length;
                                i < each_blocks.length;
                                i += 1
                            )
                                out(i)
                            Object(internal.check_outros)()
                        }
                    },
                    i(local) {
                        if (!current) {
                            for (let i = 0; i < each_value.length; i += 1)
                                Object(internal.transition_in)(each_blocks[i])
                            current = !0
                        }
                    },
                    o(local) {
                        each_blocks = each_blocks.filter(Boolean)
                        for (let i = 0; i < each_blocks.length; i += 1)
                            Object(internal.transition_out)(each_blocks[i])
                        current = !1
                    },
                    d(detaching) {
                        Object(internal.destroy_each)(each_blocks, detaching),
                            detaching && Object(internal.detach)(each_1_anchor)
                    },
                }
            }
            function RTL_svelte_instance($$self) {
                return [['primary', 'success', 'danger', 'warning']]
            }
            class RTL_svelte_RTL extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            RTL_svelte_instance,
                            RTL_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var RTL_svelte = RTL_svelte_RTL
            function index_svelte_create_fragment(ctx) {
                let h1,
                    t1,
                    br,
                    t2,
                    h20,
                    t4,
                    t5,
                    h21,
                    t7,
                    t8,
                    h22,
                    t10,
                    t11,
                    h23,
                    t13,
                    t14,
                    h24,
                    t16,
                    t17,
                    h25,
                    t19,
                    t20,
                    h26,
                    t22,
                    current
                const button = new Button_svelte({}),
                    outline = new Outline_svelte({}),
                    icon = new Icon_svelte({}),
                    size = new Size_svelte({}),
                    disabled = new Disabled_svelte({}),
                    link = new Link_svelte({}),
                    rtl = new RTL_svelte({})
                return {
                    c() {
                        ;(h1 = Object(internal.element)('h1')),
                            (h1.textContent = 'Buttons'),
                            (t1 = Object(internal.space)()),
                            (br = Object(internal.element)('br')),
                            (t2 = Object(internal.space)()),
                            (h20 = Object(internal.element)('h2')),
                            (h20.textContent = 'Colors'),
                            (t4 = Object(internal.space)()),
                            Object(internal.create_component)(
                                button.$$.fragment
                            ),
                            (t5 = Object(internal.space)()),
                            (h21 = Object(internal.element)('h2')),
                            (h21.textContent = 'Outline'),
                            (t7 = Object(internal.space)()),
                            Object(internal.create_component)(
                                outline.$$.fragment
                            ),
                            (t8 = Object(internal.space)()),
                            (h22 = Object(internal.element)('h2')),
                            (h22.textContent = 'Icon'),
                            (t10 = Object(internal.space)()),
                            Object(internal.create_component)(icon.$$.fragment),
                            (t11 = Object(internal.space)()),
                            (h23 = Object(internal.element)('h2')),
                            (h23.textContent = 'Size'),
                            (t13 = Object(internal.space)()),
                            Object(internal.create_component)(size.$$.fragment),
                            (t14 = Object(internal.space)()),
                            (h24 = Object(internal.element)('h2')),
                            (h24.textContent = 'Disabled'),
                            (t16 = Object(internal.space)()),
                            Object(internal.create_component)(
                                disabled.$$.fragment
                            ),
                            (t17 = Object(internal.space)()),
                            (h25 = Object(internal.element)('h2')),
                            (h25.textContent = 'Link'),
                            (t19 = Object(internal.space)()),
                            Object(internal.create_component)(link.$$.fragment),
                            (t20 = Object(internal.space)()),
                            (h26 = Object(internal.element)('h2')),
                            (h26.textContent = 'RTL'),
                            (t22 = Object(internal.space)()),
                            Object(internal.create_component)(rtl.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, h1, anchor),
                            Object(internal.insert)(target, t1, anchor),
                            Object(internal.insert)(target, br, anchor),
                            Object(internal.insert)(target, t2, anchor),
                            Object(internal.insert)(target, h20, anchor),
                            Object(internal.insert)(target, t4, anchor),
                            Object(internal.mount_component)(
                                button,
                                target,
                                anchor
                            ),
                            Object(internal.insert)(target, t5, anchor),
                            Object(internal.insert)(target, h21, anchor),
                            Object(internal.insert)(target, t7, anchor),
                            Object(internal.mount_component)(
                                outline,
                                target,
                                anchor
                            ),
                            Object(internal.insert)(target, t8, anchor),
                            Object(internal.insert)(target, h22, anchor),
                            Object(internal.insert)(target, t10, anchor),
                            Object(internal.mount_component)(
                                icon,
                                target,
                                anchor
                            ),
                            Object(internal.insert)(target, t11, anchor),
                            Object(internal.insert)(target, h23, anchor),
                            Object(internal.insert)(target, t13, anchor),
                            Object(internal.mount_component)(
                                size,
                                target,
                                anchor
                            ),
                            Object(internal.insert)(target, t14, anchor),
                            Object(internal.insert)(target, h24, anchor),
                            Object(internal.insert)(target, t16, anchor),
                            Object(internal.mount_component)(
                                disabled,
                                target,
                                anchor
                            ),
                            Object(internal.insert)(target, t17, anchor),
                            Object(internal.insert)(target, h25, anchor),
                            Object(internal.insert)(target, t19, anchor),
                            Object(internal.mount_component)(
                                link,
                                target,
                                anchor
                            ),
                            Object(internal.insert)(target, t20, anchor),
                            Object(internal.insert)(target, h26, anchor),
                            Object(internal.insert)(target, t22, anchor),
                            Object(internal.mount_component)(
                                rtl,
                                target,
                                anchor
                            ),
                            (current = !0)
                    },
                    p: internal.noop,
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                button.$$.fragment,
                                local
                            ),
                            Object(internal.transition_in)(
                                outline.$$.fragment,
                                local
                            ),
                            Object(internal.transition_in)(
                                icon.$$.fragment,
                                local
                            ),
                            Object(internal.transition_in)(
                                size.$$.fragment,
                                local
                            ),
                            Object(internal.transition_in)(
                                disabled.$$.fragment,
                                local
                            ),
                            Object(internal.transition_in)(
                                link.$$.fragment,
                                local
                            ),
                            Object(internal.transition_in)(
                                rtl.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            button.$$.fragment,
                            local
                        ),
                            Object(internal.transition_out)(
                                outline.$$.fragment,
                                local
                            ),
                            Object(internal.transition_out)(
                                icon.$$.fragment,
                                local
                            ),
                            Object(internal.transition_out)(
                                size.$$.fragment,
                                local
                            ),
                            Object(internal.transition_out)(
                                disabled.$$.fragment,
                                local
                            ),
                            Object(internal.transition_out)(
                                link.$$.fragment,
                                local
                            ),
                            Object(internal.transition_out)(
                                rtl.$$.fragment,
                                local
                            ),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(h1),
                            detaching && Object(internal.detach)(t1),
                            detaching && Object(internal.detach)(br),
                            detaching && Object(internal.detach)(t2),
                            detaching && Object(internal.detach)(h20),
                            detaching && Object(internal.detach)(t4),
                            Object(internal.destroy_component)(
                                button,
                                detaching
                            ),
                            detaching && Object(internal.detach)(t5),
                            detaching && Object(internal.detach)(h21),
                            detaching && Object(internal.detach)(t7),
                            Object(internal.destroy_component)(
                                outline,
                                detaching
                            ),
                            detaching && Object(internal.detach)(t8),
                            detaching && Object(internal.detach)(h22),
                            detaching && Object(internal.detach)(t10),
                            Object(internal.destroy_component)(icon, detaching),
                            detaching && Object(internal.detach)(t11),
                            detaching && Object(internal.detach)(h23),
                            detaching && Object(internal.detach)(t13),
                            Object(internal.destroy_component)(size, detaching),
                            detaching && Object(internal.detach)(t14),
                            detaching && Object(internal.detach)(h24),
                            detaching && Object(internal.detach)(t16),
                            Object(internal.destroy_component)(
                                disabled,
                                detaching
                            ),
                            detaching && Object(internal.detach)(t17),
                            detaching && Object(internal.detach)(h25),
                            detaching && Object(internal.detach)(t19),
                            Object(internal.destroy_component)(link, detaching),
                            detaching && Object(internal.detach)(t20),
                            detaching && Object(internal.detach)(h26),
                            detaching && Object(internal.detach)(t22),
                            Object(internal.destroy_component)(rtl, detaching)
                    },
                }
            }
            class index_svelte_Button_1 extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            null,
                            index_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            __webpack_exports__.a = index_svelte_Button_1
        },
        268: function(module, __webpack_exports__, __webpack_require__) {
            'use strict'
            var internal = __webpack_require__(0),
                index = __webpack_require__(2)
            function create_fragment(ctx) {
                let p
                return {
                    c() {
                        ;(p = Object(internal.element)('p')),
                            (p.textContent =
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore at\n    sunt molestias numquam, inventore dicta nesciunt maiores quisquam\n    consequatur possimus consectetur provident quasi laboriosam porro vitae.\n    Animi, sed velit?')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, p, anchor)
                    },
                    p: internal.noop,
                    i: internal.noop,
                    o: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(p)
                    },
                }
            }
            class Content_svelte_Content extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            null,
                            create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Content_svelte = Content_svelte_Content
            function create_header_slot(ctx) {
                let h3
                return {
                    c() {
                        ;(h3 = Object(internal.element)('h3')),
                            (h3.textContent = 'header text'),
                            Object(internal.attr)(h3, 'slot', 'header')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, h3, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(h3)
                    },
                }
            }
            function create_body_slot(ctx) {
                let div, current
                const content = new Content_svelte({})
                return {
                    c() {
                        ;(div = Object(internal.element)('div')),
                            Object(internal.create_component)(
                                content.$$.fragment
                            ),
                            Object(internal.attr)(div, 'slot', 'body')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, div, anchor),
                            Object(internal.mount_component)(
                                content,
                                div,
                                null
                            ),
                            (current = !0)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                content.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            content.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(div),
                            Object(internal.destroy_component)(content)
                    },
                }
            }
            function create_default_slot_3(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('cancel')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_default_slot_2(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('agree')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_footer_slot(ctx) {
                let div, t, current
                const button0 = new index.a({
                    props: {
                        outline: !0,
                        color: 'primary',
                        $$slots: { default: [create_default_slot_3] },
                        $$scope: { ctx: ctx },
                    },
                })
                button0.$on('click', ctx[1])
                const button1 = new index.a({
                    props: {
                        color: 'primary',
                        $$slots: { default: [create_default_slot_2] },
                        $$scope: { ctx: ctx },
                    },
                })
                return (
                    button1.$on('click', ctx[1]),
                    {
                        c() {
                            ;(div = Object(internal.element)('div')),
                                Object(internal.create_component)(
                                    button0.$$.fragment
                                ),
                                (t = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button1.$$.fragment
                                ),
                                Object(internal.attr)(div, 'slot', 'footer'),
                                Object(internal.set_style)(
                                    div,
                                    'text-align',
                                    'right'
                                )
                        },
                        m(target, anchor) {
                            Object(internal.insert)(target, div, anchor),
                                Object(internal.mount_component)(
                                    button0,
                                    div,
                                    null
                                ),
                                Object(internal.append)(div, t),
                                Object(internal.mount_component)(
                                    button1,
                                    div,
                                    null
                                ),
                                (current = !0)
                        },
                        p(ctx, dirty) {
                            const button0_changes = {}
                            4 & dirty &&
                                (button0_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button0.$set(button0_changes)
                            const button1_changes = {}
                            4 & dirty &&
                                (button1_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button1.$set(button1_changes)
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(
                                    button0.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button1.$$.fragment,
                                    local
                                ),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(
                                button0.$$.fragment,
                                local
                            ),
                                Object(internal.transition_out)(
                                    button1.$$.fragment,
                                    local
                                ),
                                (current = !1)
                        },
                        d(detaching) {
                            detaching && Object(internal.detach)(div),
                                Object(internal.destroy_component)(button0),
                                Object(internal.destroy_component)(button1)
                        },
                    }
                )
            }
            function create_default_slot_1(ctx) {
                let t0, t1
                return {
                    c() {
                        ;(t0 = Object(internal.space)()),
                            (t1 = Object(internal.space)())
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, t1, anchor)
                    },
                    p: internal.noop,
                    i: internal.noop,
                    o: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(t1)
                    },
                }
            }
            function create_default_slot(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('Open')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function Modal_svelte_create_fragment(ctx) {
                let t, current
                const modal = new index.b({
                        props: {
                            toggle: ctx[1],
                            isOpened: ctx[0],
                            title: title,
                            $$slots: {
                                default: [create_default_slot_1],
                                footer: [create_footer_slot],
                                body: [create_body_slot],
                                header: [create_header_slot],
                            },
                            $$scope: { ctx: ctx },
                        },
                    }),
                    button = new index.a({
                        props: {
                            $$slots: { default: [create_default_slot] },
                            $$scope: { ctx: ctx },
                        },
                    })
                return (
                    button.$on('click', ctx[1]),
                    {
                        c() {
                            Object(internal.create_component)(
                                modal.$$.fragment
                            ),
                                (t = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button.$$.fragment
                                )
                        },
                        m(target, anchor) {
                            Object(internal.mount_component)(
                                modal,
                                target,
                                anchor
                            ),
                                Object(internal.insert)(target, t, anchor),
                                Object(internal.mount_component)(
                                    button,
                                    target,
                                    anchor
                                ),
                                (current = !0)
                        },
                        p(ctx, [dirty]) {
                            const modal_changes = {}
                            1 & dirty && (modal_changes.isOpened = ctx[0]),
                                4 & dirty &&
                                    (modal_changes.$$scope = {
                                        dirty: dirty,
                                        ctx: ctx,
                                    }),
                                modal.$set(modal_changes)
                            const button_changes = {}
                            4 & dirty &&
                                (button_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button.$set(button_changes)
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(
                                    modal.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button.$$.fragment,
                                    local
                                ),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(
                                modal.$$.fragment,
                                local
                            ),
                                Object(internal.transition_out)(
                                    button.$$.fragment,
                                    local
                                ),
                                (current = !1)
                        },
                        d(detaching) {
                            Object(internal.destroy_component)(
                                modal,
                                detaching
                            ),
                                detaching && Object(internal.detach)(t),
                                Object(internal.destroy_component)(
                                    button,
                                    detaching
                                )
                        },
                    }
                )
            }
            const title = 'Modal header'
            function instance($$self, $$props, $$invalidate) {
                let isOpened = !1
                return [isOpened, () => $$invalidate(0, (isOpened = !isOpened))]
            }
            class Modal_svelte_Modal_1 extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            instance,
                            Modal_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Modal_svelte = Modal_svelte_Modal_1
            function create_header_slot_2(ctx) {
                let h3
                return {
                    c() {
                        ;(h3 = Object(internal.element)('h3')),
                            (h3.textContent = 'header text'),
                            Object(internal.attr)(h3, 'slot', 'header')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, h3, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(h3)
                    },
                }
            }
            function create_body_slot_2(ctx) {
                let div, current
                const content = new Content_svelte({})
                return {
                    c() {
                        ;(div = Object(internal.element)('div')),
                            Object(internal.create_component)(
                                content.$$.fragment
                            ),
                            Object(internal.attr)(div, 'slot', 'body')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, div, anchor),
                            Object(internal.mount_component)(
                                content,
                                div,
                                null
                            ),
                            (current = !0)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                content.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            content.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(div),
                            Object(internal.destroy_component)(content)
                    },
                }
            }
            function create_default_slot_11(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('cancel')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_default_slot_10(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('agree')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_footer_slot_2(ctx) {
                let div, t, current
                const button0 = new index.a({
                    props: {
                        outline: !0,
                        color: 'primary',
                        $$slots: { default: [create_default_slot_11] },
                        $$scope: { ctx: ctx },
                    },
                })
                button0.$on('click', ctx[3])
                const button1 = new index.a({
                    props: {
                        color: 'primary',
                        $$slots: { default: [create_default_slot_10] },
                        $$scope: { ctx: ctx },
                    },
                })
                return (
                    button1.$on('click', ctx[3]),
                    {
                        c() {
                            ;(div = Object(internal.element)('div')),
                                Object(internal.create_component)(
                                    button0.$$.fragment
                                ),
                                (t = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button1.$$.fragment
                                ),
                                Object(internal.attr)(div, 'slot', 'footer'),
                                Object(internal.set_style)(
                                    div,
                                    'text-align',
                                    'right'
                                )
                        },
                        m(target, anchor) {
                            Object(internal.insert)(target, div, anchor),
                                Object(internal.mount_component)(
                                    button0,
                                    div,
                                    null
                                ),
                                Object(internal.append)(div, t),
                                Object(internal.mount_component)(
                                    button1,
                                    div,
                                    null
                                ),
                                (current = !0)
                        },
                        p(ctx, dirty) {
                            const button0_changes = {}
                            64 & dirty &&
                                (button0_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button0.$set(button0_changes)
                            const button1_changes = {}
                            64 & dirty &&
                                (button1_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button1.$set(button1_changes)
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(
                                    button0.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button1.$$.fragment,
                                    local
                                ),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(
                                button0.$$.fragment,
                                local
                            ),
                                Object(internal.transition_out)(
                                    button1.$$.fragment,
                                    local
                                ),
                                (current = !1)
                        },
                        d(detaching) {
                            detaching && Object(internal.detach)(div),
                                Object(internal.destroy_component)(button0),
                                Object(internal.destroy_component)(button1)
                        },
                    }
                )
            }
            function create_default_slot_9(ctx) {
                let t0, t1
                return {
                    c() {
                        ;(t0 = Object(internal.space)()),
                            (t1 = Object(internal.space)())
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, t1, anchor)
                    },
                    p: internal.noop,
                    i: internal.noop,
                    o: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(t1)
                    },
                }
            }
            function create_default_slot_8(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('Open small modal')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_header_slot_1(ctx) {
                let h3
                return {
                    c() {
                        ;(h3 = Object(internal.element)('h3')),
                            (h3.textContent = 'header text'),
                            Object(internal.attr)(h3, 'slot', 'header')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, h3, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(h3)
                    },
                }
            }
            function create_body_slot_1(ctx) {
                let div, current
                const content = new Content_svelte({})
                return {
                    c() {
                        ;(div = Object(internal.element)('div')),
                            Object(internal.create_component)(
                                content.$$.fragment
                            ),
                            Object(internal.attr)(div, 'slot', 'body')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, div, anchor),
                            Object(internal.mount_component)(
                                content,
                                div,
                                null
                            ),
                            (current = !0)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                content.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            content.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(div),
                            Object(internal.destroy_component)(content)
                    },
                }
            }
            function create_default_slot_7(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('cancel')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_default_slot_6(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('agree')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function create_footer_slot_1(ctx) {
                let div, t, current
                const button0 = new index.a({
                    props: {
                        outline: !0,
                        color: 'primary',
                        $$slots: { default: [create_default_slot_7] },
                        $$scope: { ctx: ctx },
                    },
                })
                button0.$on('click', ctx[4])
                const button1 = new index.a({
                    props: {
                        color: 'primary',
                        $$slots: { default: [create_default_slot_6] },
                        $$scope: { ctx: ctx },
                    },
                })
                return (
                    button1.$on('click', ctx[4]),
                    {
                        c() {
                            ;(div = Object(internal.element)('div')),
                                Object(internal.create_component)(
                                    button0.$$.fragment
                                ),
                                (t = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button1.$$.fragment
                                ),
                                Object(internal.attr)(div, 'slot', 'footer'),
                                Object(internal.set_style)(
                                    div,
                                    'text-align',
                                    'right'
                                )
                        },
                        m(target, anchor) {
                            Object(internal.insert)(target, div, anchor),
                                Object(internal.mount_component)(
                                    button0,
                                    div,
                                    null
                                ),
                                Object(internal.append)(div, t),
                                Object(internal.mount_component)(
                                    button1,
                                    div,
                                    null
                                ),
                                (current = !0)
                        },
                        p(ctx, dirty) {
                            const button0_changes = {}
                            64 & dirty &&
                                (button0_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button0.$set(button0_changes)
                            const button1_changes = {}
                            64 & dirty &&
                                (button1_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button1.$set(button1_changes)
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(
                                    button0.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button1.$$.fragment,
                                    local
                                ),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(
                                button0.$$.fragment,
                                local
                            ),
                                Object(internal.transition_out)(
                                    button1.$$.fragment,
                                    local
                                ),
                                (current = !1)
                        },
                        d(detaching) {
                            detaching && Object(internal.detach)(div),
                                Object(internal.destroy_component)(button0),
                                Object(internal.destroy_component)(button1)
                        },
                    }
                )
            }
            function create_default_slot_5(ctx) {
                let t0, t1
                return {
                    c() {
                        ;(t0 = Object(internal.space)()),
                            (t1 = Object(internal.space)())
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, t1, anchor)
                    },
                    p: internal.noop,
                    i: internal.noop,
                    o: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(t1)
                    },
                }
            }
            function create_default_slot_4(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('Open medium modal')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function Size_svelte_create_header_slot(ctx) {
                let h3
                return {
                    c() {
                        ;(h3 = Object(internal.element)('h3')),
                            (h3.textContent = 'header text'),
                            Object(internal.attr)(h3, 'slot', 'header')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, h3, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(h3)
                    },
                }
            }
            function Size_svelte_create_body_slot(ctx) {
                let div, current
                const content = new Content_svelte({})
                return {
                    c() {
                        ;(div = Object(internal.element)('div')),
                            Object(internal.create_component)(
                                content.$$.fragment
                            ),
                            Object(internal.attr)(div, 'slot', 'body')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, div, anchor),
                            Object(internal.mount_component)(
                                content,
                                div,
                                null
                            ),
                            (current = !0)
                    },
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                content.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            content.$$.fragment,
                            local
                        ),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(div),
                            Object(internal.destroy_component)(content)
                    },
                }
            }
            function Size_svelte_create_default_slot_3(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('cancel')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function Size_svelte_create_default_slot_2(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('agree')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function Size_svelte_create_footer_slot(ctx) {
                let div, t, current
                const button0 = new index.a({
                    props: {
                        outline: !0,
                        color: 'primary',
                        $$slots: {
                            default: [Size_svelte_create_default_slot_3],
                        },
                        $$scope: { ctx: ctx },
                    },
                })
                button0.$on('click', ctx[5])
                const button1 = new index.a({
                    props: {
                        color: 'primary',
                        $$slots: {
                            default: [Size_svelte_create_default_slot_2],
                        },
                        $$scope: { ctx: ctx },
                    },
                })
                return (
                    button1.$on('click', ctx[5]),
                    {
                        c() {
                            ;(div = Object(internal.element)('div')),
                                Object(internal.create_component)(
                                    button0.$$.fragment
                                ),
                                (t = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button1.$$.fragment
                                ),
                                Object(internal.attr)(div, 'slot', 'footer'),
                                Object(internal.set_style)(
                                    div,
                                    'text-align',
                                    'right'
                                )
                        },
                        m(target, anchor) {
                            Object(internal.insert)(target, div, anchor),
                                Object(internal.mount_component)(
                                    button0,
                                    div,
                                    null
                                ),
                                Object(internal.append)(div, t),
                                Object(internal.mount_component)(
                                    button1,
                                    div,
                                    null
                                ),
                                (current = !0)
                        },
                        p(ctx, dirty) {
                            const button0_changes = {}
                            64 & dirty &&
                                (button0_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button0.$set(button0_changes)
                            const button1_changes = {}
                            64 & dirty &&
                                (button1_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button1.$set(button1_changes)
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(
                                    button0.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button1.$$.fragment,
                                    local
                                ),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(
                                button0.$$.fragment,
                                local
                            ),
                                Object(internal.transition_out)(
                                    button1.$$.fragment,
                                    local
                                ),
                                (current = !1)
                        },
                        d(detaching) {
                            detaching && Object(internal.detach)(div),
                                Object(internal.destroy_component)(button0),
                                Object(internal.destroy_component)(button1)
                        },
                    }
                )
            }
            function Size_svelte_create_default_slot_1(ctx) {
                let t0, t1
                return {
                    c() {
                        ;(t0 = Object(internal.space)()),
                            (t1 = Object(internal.space)())
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t0, anchor),
                            Object(internal.insert)(target, t1, anchor)
                    },
                    p: internal.noop,
                    i: internal.noop,
                    o: internal.noop,
                    d(detaching) {
                        detaching && Object(internal.detach)(t0),
                            detaching && Object(internal.detach)(t1)
                    },
                }
            }
            function Size_svelte_create_default_slot(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('Open large modal')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function Size_svelte_create_fragment(ctx) {
                let t0, t1, t2, t3, t4, current
                const modal0 = new index.b({
                        props: {
                            size: 'sm',
                            toggle: ctx[3],
                            isOpened: ctx[0],
                            $$slots: {
                                default: [create_default_slot_9],
                                footer: [create_footer_slot_2],
                                body: [create_body_slot_2],
                                header: [create_header_slot_2],
                            },
                            $$scope: { ctx: ctx },
                        },
                    }),
                    button0 = new index.a({
                        props: {
                            $$slots: { default: [create_default_slot_8] },
                            $$scope: { ctx: ctx },
                        },
                    })
                button0.$on('click', ctx[3])
                const modal1 = new index.b({
                        props: {
                            size: 'md',
                            toggle: ctx[4],
                            isOpened: ctx[1],
                            $$slots: {
                                default: [create_default_slot_5],
                                footer: [create_footer_slot_1],
                                body: [create_body_slot_1],
                                header: [create_header_slot_1],
                            },
                            $$scope: { ctx: ctx },
                        },
                    }),
                    button1 = new index.a({
                        props: {
                            $$slots: { default: [create_default_slot_4] },
                            $$scope: { ctx: ctx },
                        },
                    })
                button1.$on('click', ctx[4])
                const modal2 = new index.b({
                        props: {
                            size: 'lg',
                            toggle: ctx[5],
                            isOpened: ctx[2],
                            $$slots: {
                                default: [Size_svelte_create_default_slot_1],
                                footer: [Size_svelte_create_footer_slot],
                                body: [Size_svelte_create_body_slot],
                                header: [Size_svelte_create_header_slot],
                            },
                            $$scope: { ctx: ctx },
                        },
                    }),
                    button2 = new index.a({
                        props: {
                            $$slots: {
                                default: [Size_svelte_create_default_slot],
                            },
                            $$scope: { ctx: ctx },
                        },
                    })
                return (
                    button2.$on('click', ctx[5]),
                    {
                        c() {
                            Object(internal.create_component)(
                                modal0.$$.fragment
                            ),
                                (t0 = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button0.$$.fragment
                                ),
                                (t1 = Object(internal.space)()),
                                Object(internal.create_component)(
                                    modal1.$$.fragment
                                ),
                                (t2 = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button1.$$.fragment
                                ),
                                (t3 = Object(internal.space)()),
                                Object(internal.create_component)(
                                    modal2.$$.fragment
                                ),
                                (t4 = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button2.$$.fragment
                                )
                        },
                        m(target, anchor) {
                            Object(internal.mount_component)(
                                modal0,
                                target,
                                anchor
                            ),
                                Object(internal.insert)(target, t0, anchor),
                                Object(internal.mount_component)(
                                    button0,
                                    target,
                                    anchor
                                ),
                                Object(internal.insert)(target, t1, anchor),
                                Object(internal.mount_component)(
                                    modal1,
                                    target,
                                    anchor
                                ),
                                Object(internal.insert)(target, t2, anchor),
                                Object(internal.mount_component)(
                                    button1,
                                    target,
                                    anchor
                                ),
                                Object(internal.insert)(target, t3, anchor),
                                Object(internal.mount_component)(
                                    modal2,
                                    target,
                                    anchor
                                ),
                                Object(internal.insert)(target, t4, anchor),
                                Object(internal.mount_component)(
                                    button2,
                                    target,
                                    anchor
                                ),
                                (current = !0)
                        },
                        p(ctx, [dirty]) {
                            const modal0_changes = {}
                            1 & dirty && (modal0_changes.isOpened = ctx[0]),
                                64 & dirty &&
                                    (modal0_changes.$$scope = {
                                        dirty: dirty,
                                        ctx: ctx,
                                    }),
                                modal0.$set(modal0_changes)
                            const button0_changes = {}
                            64 & dirty &&
                                (button0_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button0.$set(button0_changes)
                            const modal1_changes = {}
                            2 & dirty && (modal1_changes.isOpened = ctx[1]),
                                64 & dirty &&
                                    (modal1_changes.$$scope = {
                                        dirty: dirty,
                                        ctx: ctx,
                                    }),
                                modal1.$set(modal1_changes)
                            const button1_changes = {}
                            64 & dirty &&
                                (button1_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button1.$set(button1_changes)
                            const modal2_changes = {}
                            4 & dirty && (modal2_changes.isOpened = ctx[2]),
                                64 & dirty &&
                                    (modal2_changes.$$scope = {
                                        dirty: dirty,
                                        ctx: ctx,
                                    }),
                                modal2.$set(modal2_changes)
                            const button2_changes = {}
                            64 & dirty &&
                                (button2_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button2.$set(button2_changes)
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(
                                    modal0.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button0.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    modal1.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button1.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    modal2.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button2.$$.fragment,
                                    local
                                ),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(
                                modal0.$$.fragment,
                                local
                            ),
                                Object(internal.transition_out)(
                                    button0.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_out)(
                                    modal1.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_out)(
                                    button1.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_out)(
                                    modal2.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_out)(
                                    button2.$$.fragment,
                                    local
                                ),
                                (current = !1)
                        },
                        d(detaching) {
                            Object(internal.destroy_component)(
                                modal0,
                                detaching
                            ),
                                detaching && Object(internal.detach)(t0),
                                Object(internal.destroy_component)(
                                    button0,
                                    detaching
                                ),
                                detaching && Object(internal.detach)(t1),
                                Object(internal.destroy_component)(
                                    modal1,
                                    detaching
                                ),
                                detaching && Object(internal.detach)(t2),
                                Object(internal.destroy_component)(
                                    button1,
                                    detaching
                                ),
                                detaching && Object(internal.detach)(t3),
                                Object(internal.destroy_component)(
                                    modal2,
                                    detaching
                                ),
                                detaching && Object(internal.detach)(t4),
                                Object(internal.destroy_component)(
                                    button2,
                                    detaching
                                )
                        },
                    }
                )
            }
            function Size_svelte_instance($$self, $$props, $$invalidate) {
                let isOpenedOne = !1,
                    isOpenedTwo = !1,
                    isOpenedThree = !1
                return [
                    isOpenedOne,
                    isOpenedTwo,
                    isOpenedThree,
                    () => $$invalidate(0, (isOpenedOne = !isOpenedOne)),
                    () => $$invalidate(1, (isOpenedTwo = !isOpenedTwo)),
                    () => $$invalidate(2, (isOpenedThree = !isOpenedThree)),
                ]
            }
            class Size_svelte_Size extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            Size_svelte_instance,
                            Size_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var Size_svelte = Size_svelte_Size
            function PopUp_svelte_create_default_slot_2(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('accept')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function PopUp_svelte_create_default_slot_1(ctx) {
                let t, div, current
                const content = new Content_svelte({}),
                    button = new index.a({
                        props: {
                            color: 'success',
                            $$slots: {
                                default: [PopUp_svelte_create_default_slot_2],
                            },
                            $$scope: { ctx: ctx },
                        },
                    })
                return (
                    button.$on('click', ctx[1]),
                    {
                        c() {
                            Object(internal.create_component)(
                                content.$$.fragment
                            ),
                                (t = Object(internal.space)()),
                                (div = Object(internal.element)('div')),
                                Object(internal.create_component)(
                                    button.$$.fragment
                                ),
                                Object(internal.set_style)(
                                    div,
                                    'text-align',
                                    'center'
                                )
                        },
                        m(target, anchor) {
                            Object(internal.mount_component)(
                                content,
                                target,
                                anchor
                            ),
                                Object(internal.insert)(target, t, anchor),
                                Object(internal.insert)(target, div, anchor),
                                Object(internal.mount_component)(
                                    button,
                                    div,
                                    null
                                ),
                                (current = !0)
                        },
                        p(ctx, dirty) {
                            const button_changes = {}
                            4 & dirty &&
                                (button_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button.$set(button_changes)
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(
                                    content.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button.$$.fragment,
                                    local
                                ),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(
                                content.$$.fragment,
                                local
                            ),
                                Object(internal.transition_out)(
                                    button.$$.fragment,
                                    local
                                ),
                                (current = !1)
                        },
                        d(detaching) {
                            Object(internal.destroy_component)(
                                content,
                                detaching
                            ),
                                detaching && Object(internal.detach)(t),
                                detaching && Object(internal.detach)(div),
                                Object(internal.destroy_component)(button)
                        },
                    }
                )
            }
            function PopUp_svelte_create_default_slot(ctx) {
                let t
                return {
                    c() {
                        t = Object(internal.text)('Popup')
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, t, anchor)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(t)
                    },
                }
            }
            function PopUp_svelte_create_fragment(ctx) {
                let t, current
                const modal = new index.b({
                        props: {
                            size: 'sm',
                            popup: PopUp_svelte_popup,
                            toggle: ctx[1],
                            isOpened: ctx[0],
                            $$slots: {
                                default: [PopUp_svelte_create_default_slot_1],
                            },
                            $$scope: { ctx: ctx },
                        },
                    }),
                    button = new index.a({
                        props: {
                            $$slots: {
                                default: [PopUp_svelte_create_default_slot],
                            },
                            $$scope: { ctx: ctx },
                        },
                    })
                return (
                    button.$on('click', ctx[1]),
                    {
                        c() {
                            Object(internal.create_component)(
                                modal.$$.fragment
                            ),
                                (t = Object(internal.space)()),
                                Object(internal.create_component)(
                                    button.$$.fragment
                                )
                        },
                        m(target, anchor) {
                            Object(internal.mount_component)(
                                modal,
                                target,
                                anchor
                            ),
                                Object(internal.insert)(target, t, anchor),
                                Object(internal.mount_component)(
                                    button,
                                    target,
                                    anchor
                                ),
                                (current = !0)
                        },
                        p(ctx, [dirty]) {
                            const modal_changes = {}
                            1 & dirty && (modal_changes.isOpened = ctx[0]),
                                4 & dirty &&
                                    (modal_changes.$$scope = {
                                        dirty: dirty,
                                        ctx: ctx,
                                    }),
                                modal.$set(modal_changes)
                            const button_changes = {}
                            4 & dirty &&
                                (button_changes.$$scope = {
                                    dirty: dirty,
                                    ctx: ctx,
                                }),
                                button.$set(button_changes)
                        },
                        i(local) {
                            current ||
                                (Object(internal.transition_in)(
                                    modal.$$.fragment,
                                    local
                                ),
                                Object(internal.transition_in)(
                                    button.$$.fragment,
                                    local
                                ),
                                (current = !0))
                        },
                        o(local) {
                            Object(internal.transition_out)(
                                modal.$$.fragment,
                                local
                            ),
                                Object(internal.transition_out)(
                                    button.$$.fragment,
                                    local
                                ),
                                (current = !1)
                        },
                        d(detaching) {
                            Object(internal.destroy_component)(
                                modal,
                                detaching
                            ),
                                detaching && Object(internal.detach)(t),
                                Object(internal.destroy_component)(
                                    button,
                                    detaching
                                )
                        },
                    }
                )
            }
            const PopUp_svelte_popup = !0
            function PopUp_svelte_instance($$self, $$props, $$invalidate) {
                let isOpened = !1
                return [isOpened, () => $$invalidate(0, (isOpened = !isOpened))]
            }
            class PopUp_svelte_PopUp extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            PopUp_svelte_instance,
                            PopUp_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            var PopUp_svelte = PopUp_svelte_PopUp
            function index_svelte_create_fragment(ctx) {
                let h1,
                    t1,
                    br0,
                    t2,
                    h3,
                    t4,
                    t5,
                    br1,
                    t6,
                    br2,
                    t7,
                    h20,
                    t9,
                    t10,
                    br3,
                    t11,
                    br4,
                    t12,
                    h21,
                    t14,
                    current
                const modal = new Modal_svelte({}),
                    size = new Size_svelte({}),
                    popup = new PopUp_svelte({})
                return {
                    c() {
                        ;(h1 = Object(internal.element)('h1')),
                            (h1.textContent = 'Modal'),
                            (t1 = Object(internal.space)()),
                            (br0 = Object(internal.element)('br')),
                            (t2 = Object(internal.space)()),
                            (h3 = Object(internal.element)('h3')),
                            (h3.textContent = 'Default'),
                            (t4 = Object(internal.space)()),
                            Object(internal.create_component)(
                                modal.$$.fragment
                            ),
                            (t5 = Object(internal.space)()),
                            (br1 = Object(internal.element)('br')),
                            (t6 = Object(internal.space)()),
                            (br2 = Object(internal.element)('br')),
                            (t7 = Object(internal.space)()),
                            (h20 = Object(internal.element)('h2')),
                            (h20.textContent = 'Size'),
                            (t9 = Object(internal.space)()),
                            Object(internal.create_component)(size.$$.fragment),
                            (t10 = Object(internal.space)()),
                            (br3 = Object(internal.element)('br')),
                            (t11 = Object(internal.space)()),
                            (br4 = Object(internal.element)('br')),
                            (t12 = Object(internal.space)()),
                            (h21 = Object(internal.element)('h2')),
                            (h21.textContent = 'Popup'),
                            (t14 = Object(internal.space)()),
                            Object(internal.create_component)(popup.$$.fragment)
                    },
                    m(target, anchor) {
                        Object(internal.insert)(target, h1, anchor),
                            Object(internal.insert)(target, t1, anchor),
                            Object(internal.insert)(target, br0, anchor),
                            Object(internal.insert)(target, t2, anchor),
                            Object(internal.insert)(target, h3, anchor),
                            Object(internal.insert)(target, t4, anchor),
                            Object(internal.mount_component)(
                                modal,
                                target,
                                anchor
                            ),
                            Object(internal.insert)(target, t5, anchor),
                            Object(internal.insert)(target, br1, anchor),
                            Object(internal.insert)(target, t6, anchor),
                            Object(internal.insert)(target, br2, anchor),
                            Object(internal.insert)(target, t7, anchor),
                            Object(internal.insert)(target, h20, anchor),
                            Object(internal.insert)(target, t9, anchor),
                            Object(internal.mount_component)(
                                size,
                                target,
                                anchor
                            ),
                            Object(internal.insert)(target, t10, anchor),
                            Object(internal.insert)(target, br3, anchor),
                            Object(internal.insert)(target, t11, anchor),
                            Object(internal.insert)(target, br4, anchor),
                            Object(internal.insert)(target, t12, anchor),
                            Object(internal.insert)(target, h21, anchor),
                            Object(internal.insert)(target, t14, anchor),
                            Object(internal.mount_component)(
                                popup,
                                target,
                                anchor
                            ),
                            (current = !0)
                    },
                    p: internal.noop,
                    i(local) {
                        current ||
                            (Object(internal.transition_in)(
                                modal.$$.fragment,
                                local
                            ),
                            Object(internal.transition_in)(
                                size.$$.fragment,
                                local
                            ),
                            Object(internal.transition_in)(
                                popup.$$.fragment,
                                local
                            ),
                            (current = !0))
                    },
                    o(local) {
                        Object(internal.transition_out)(
                            modal.$$.fragment,
                            local
                        ),
                            Object(internal.transition_out)(
                                size.$$.fragment,
                                local
                            ),
                            Object(internal.transition_out)(
                                popup.$$.fragment,
                                local
                            ),
                            (current = !1)
                    },
                    d(detaching) {
                        detaching && Object(internal.detach)(h1),
                            detaching && Object(internal.detach)(t1),
                            detaching && Object(internal.detach)(br0),
                            detaching && Object(internal.detach)(t2),
                            detaching && Object(internal.detach)(h3),
                            detaching && Object(internal.detach)(t4),
                            Object(internal.destroy_component)(
                                modal,
                                detaching
                            ),
                            detaching && Object(internal.detach)(t5),
                            detaching && Object(internal.detach)(br1),
                            detaching && Object(internal.detach)(t6),
                            detaching && Object(internal.detach)(br2),
                            detaching && Object(internal.detach)(t7),
                            detaching && Object(internal.detach)(h20),
                            detaching && Object(internal.detach)(t9),
                            Object(internal.destroy_component)(size, detaching),
                            detaching && Object(internal.detach)(t10),
                            detaching && Object(internal.detach)(br3),
                            detaching && Object(internal.detach)(t11),
                            detaching && Object(internal.detach)(br4),
                            detaching && Object(internal.detach)(t12),
                            detaching && Object(internal.detach)(h21),
                            detaching && Object(internal.detach)(t14),
                            Object(internal.destroy_component)(popup, detaching)
                    },
                }
            }
            class index_svelte_Modal_1 extends internal.SvelteComponent {
                constructor(options) {
                    super(),
                        Object(internal.init)(
                            this,
                            options,
                            null,
                            index_svelte_create_fragment,
                            internal.safe_not_equal,
                            {}
                        )
                }
            }
            __webpack_exports__.a = index_svelte_Modal_1
        },
        270: function(module, exports, __webpack_require__) {
            __webpack_require__(271),
                __webpack_require__(417),
                (module.exports = __webpack_require__(418))
        },
        335: function(module, exports) {},
        418: function(module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    __webpack_require__(17), __webpack_require__(77)
                    var _storybook_svelte__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                            85
                        ),
                        _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                            164
                        )
                    Object(
                        _storybook_svelte__WEBPACK_IMPORTED_MODULE_2__.addParameters
                    )({
                        options: {
                            name: ''
                                .concat(
                                    _package_json__WEBPACK_IMPORTED_MODULE_3__.name,
                                    ' '
                                )
                                .concat(
                                    _package_json__WEBPACK_IMPORTED_MODULE_3__.version
                                ),
                            url: 'https://github.com/jabama-co/svelte-admin',
                        },
                    }),
                        Object(
                            _storybook_svelte__WEBPACK_IMPORTED_MODULE_2__.configure
                        )(__webpack_require__(607), module)
                }.call(this, __webpack_require__(210)(module))
        },
        607: function(module, exports, __webpack_require__) {
            var map = { './index.stories.js': 608 }
            function webpackContext(req) {
                var id = webpackContextResolve(req)
                return __webpack_require__(id)
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'")
                    throw ((e.code = 'MODULE_NOT_FOUND'), e)
                }
                return map[req]
            }
            ;(webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map)
            }),
                (webpackContext.resolve = webpackContextResolve),
                (module.exports = webpackContext),
                (webpackContext.id = 607)
        },
        608: function(module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__),
                function(module) {
                    var _storybook_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                            85
                        ),
                        _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                            267
                        ),
                        _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                            268
                        ),
                        story = function(Component) {
                            return function() {
                                return { Component: Component }
                            }
                        }
                    Object(
                        _storybook_svelte__WEBPACK_IMPORTED_MODULE_0__.storiesOf
                    )('Components', module)
                        .add(
                            'Button',
                            story(_Button__WEBPACK_IMPORTED_MODULE_1__.a)
                        )
                        .add(
                            'Modal',
                            story(_Modal__WEBPACK_IMPORTED_MODULE_2__.a)
                        )
                }.call(this, __webpack_require__(210)(module))
        },
    },
    [[270, 1, 2]],
])
//# sourceMappingURL=main.ec3223463d03c4c895d4.bundle.js.map
