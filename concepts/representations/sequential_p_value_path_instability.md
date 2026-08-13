# Sequential p-value path instability

## Summary

Sequential p-value path instability is the representation of how a p-value changes as observations accumulate, showing that early significance can appear and disappear.

## Canonical Form

- Unit of analysis: study, interim sample size, p-value, stopping point, hypothesis test, or accumulation path.
- Typical representation: p-value trajectory over sample size with a nominal significance threshold.
- Representation target: make optional stopping risk visible as a path rather than a single final result.
- Empirical signature: the p-value crosses the significance threshold at some interim samples but not consistently across the accumulation path.

## Uses in Science of Science

- Visualizes [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md).
- Complements [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md) with an interpretable sequence plot.
- Links to [nominal-significance finding boundary](nominal_significance_finding_boundary.md) because threshold crossings are path-dependent.
- Helps communicate [study power false-positive risk](../measures/study_power_false_positive_risk.md).

## Operationalization

- Order observations by collection sequence or simulated arrival order.
- Recompute the focal p-value after each possible interim sample size or after fixed increments.
- Plot the p-value path with the alpha threshold and the chosen stopping point.
- Repeat across simulated null datasets to show expected crossing frequency.
- Report whether the actual stopping rule was fixed before observing interim results.

## Evidence and Validations

- Verified full-text evidence from Simmons et al. (2011) presents a simulated p-value path that repeatedly crosses the conventional significance threshold as data accumulate.
- The figure demonstrates why checking significance during collection can inflate false-positive rates.
- This motif is a representation because the same statistical problem can be summarized as a path rather than only as an optional-stopping rule.
- It gives reviewers and readers a compact diagnostic for unstable interim significance.

## Caveats

- A single p-value path is illustrative; false-positive inflation requires repeated or simulated paths to quantify.
- Sequential designs can be valid when stopping rules and alpha spending are prespecified.
- Observation order can matter if the data-generating process changes over time.

## Links

- [optional stopping false positives](../mechanisms/optional_stopping_false_positives.md)
- [false-positive flexibility simulation](../methods/false_positive_flexibility_simulation.md)
- [nominal-significance finding boundary](nominal_significance_finding_boundary.md)
- [study power false-positive risk](../measures/study_power_false_positive_risk.md)
- [researcher-degrees disclosure checklist](../methods/researcher_degrees_disclosure_checklist.md)
- [minimum per-cell sample-size guardrail](../methods/minimum_per_cell_sample_size_guardrail.md)
- [analytic flexibility and false-positive risk](../validations/analytic_flexibility_false_positives.md)

## References

- Simmons, J. P., Nelson, L. D., & Simonsohn, U. (2011). False-positive psychology: Undisclosed flexibility in data collection and analysis allows presenting anything as significant. *Psychological Science*, 22(11), 1359-1366. https://doi.org/10.1177/0956797611417632 [OpenAlex: W2161498332; Dimensions: pub.1051875862; SciSciNet: W2161498332; WoS: unknown]

## Metadata

- Concept ID: `sequential_p_value_path_instability`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Simmons et al. (2011) (2011)
- Latest seen paper: Simmons et al. (2011) (2011)
- Primary reference DOI: `10.1177/0956797611417632`
- OpenAlex ID: `W2161498332`
- Dimensions ID: `pub.1051875862`
- SciSciNet ID: `W2161498332`
- Aliases: p-value accumulation path; optional-stopping p-value trajectory; sequential significance instability; interim p-value path
