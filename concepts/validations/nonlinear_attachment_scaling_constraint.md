# Nonlinear attachment scaling constraint

## Summary

Nonlinear attachment scaling constraint is the validation boundary that scale-free power-law behavior depends on the functional form of the attachment kernel, with linear attachment as a special scaling regime.

## Canonical Form

- Unit of analysis: attachment kernel, node degree, temporal network, generative model, or scale-free fit.
- Typical representation: attachment-kernel exponent, nonlinear attachment simulation, scaling/no-scaling regime table, or model-boundary caveat.
- Validation target: avoid treating any rich-get-richer process as sufficient for scale-free power-law structure.
- Empirical signature: deviations from linear attachment change or eliminate the expected scaling behavior.

## Uses in Science of Science

- Qualifies [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md) by making its functional-form assumption explicit.
- Links [scale-free exponent derivation](../methods/scale_free_exponent_derivation.md) to a model-boundary condition.
- Extends [growth-attachment null models](growth_attachment_null_models.md), because growth plus attachment is still underspecified without the attachment kernel shape.
- Helps evaluate citation, collaboration, and visibility models that invoke [preferential attachment](../mechanisms/preferential_attachment.md) without testing whether attachment is linear.

## Operationalization

- Estimate attachment probability as a function of current degree from time-resolved network data.
- Fit linear and nonlinear kernels, such as proportional, sublinear, and superlinear attachment.
- Simulate expected degree distributions under each fitted kernel.
- Test whether the observed tail and exponent are compatible with the inferred kernel.
- Report model claims as kernel-specific rather than generic rich-get-richer statements.

## Evidence and Validations

- Verified full-text evidence from Barabasi and Albert (1999) states that their model assumes linear preferential attachment.
- The paper notes that the attachment probability could take an arbitrary nonlinear form but reports simulations indicating that scaling is present only for the linear case.
- This makes the linearity of attachment a substantive validation condition for scale-free interpretations.

## Caveats

- Later network models may produce heavy tails under mechanisms other than the original Barabasi-Albert assumptions.
- Empirical kernel estimation can be biased by missing early links, node fitness, aging, and database start dates.
- A network may show an approximate heavy tail even when its microscopic attachment process is not purely linear.

## Links

- [linear preferential-attachment kernel](../measures/linear_attachment_kernel.md)
- [scale-free exponent derivation](../methods/scale_free_exponent_derivation.md)
- [stationary scale-free growth model](../methods/stationary_scale_free_growth_model.md)
- [growth-attachment null models](growth_attachment_null_models.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [node degree growth trajectory](../measures/node_degree_growth_trajectory.md)

## References

- Barabasi, A.-L., & Albert, R. (1999). Emergence of scaling in random networks. *Science*, 286(5439), 509-512. https://doi.org/10.1126/science.286.5439.509 [OpenAlex: W2008620264; Dimensions: pub.1010080128; SciSciNet: W2008620264; WoS: unknown]

## Metadata

- Concept ID: `nonlinear_attachment_scaling_constraint`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Barabasi and Albert (1999) (1999)
- Latest seen paper: Barabasi and Albert (1999) (1999)
- Primary reference DOI: `10.1126/science.286.5439.509`
- OpenAlex ID: `W2008620264`
- Dimensions ID: `pub.1010080128`
- SciSciNet ID: `W2008620264`
- Aliases: nonlinear attachment caveat; preferential-attachment linearity constraint; attachment-kernel scaling boundary; nonlinear rich-get-richer limit
