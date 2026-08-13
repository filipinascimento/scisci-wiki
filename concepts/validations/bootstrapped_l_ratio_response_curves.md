# Bootstrapped L-ratio response curves

## Summary

Outcome curves over L-ratio percentiles should carry uncertainty bands estimated by bootstrap or comparable resampling.

## Canonical Form

- Unit of analysis: paper, author outcome, L-ratio percentile, bootstrap replicate, confidence interval, or curve.
- Typical representation: smoothed or binned L-ratio response curves with resampled confidence envelopes.
- Mechanism, measurement, or validation target: uncertainty visualization for flat-team outcome gradients.
- Empirical signature: curve directions are interpreted alongside bootstrapped confidence intervals.

## Uses in Science of Science

- Refines flat-team visualization validation by linking it to [l ratio outcome battery](../methods/l_ratio_outcome_battery.md) and [lead role ratio](../measures/lead_role_ratio.md).
- Useful as a reusable check when [team hierarchy flatness](../mechanisms/team_hierarchy_flatness.md) is used in science-of-science inference.
- Creates cross-links to [same size team hierarchy contrast](same_size_team_hierarchy_contrast.md) so the motif is not interpreted in isolation.

## Operationalization

- Bin or smooth outcomes by L-ratio percentile.
- Bootstrap observations, teams, authors, or clusters according to the dependence structure.
- Plot 95-percent confidence envelopes and compare curve direction across outcomes.

## Evidence and Validations

- Verified local full text from Xu et al. (2022) reports bootstrapped 95-percent confidence intervals around all L-ratio outcome curves in Figure 2.
- The motif records curve uncertainty rather than only point-estimate direction.

## Caveats

- The verified text does not specify the bootstrap unit.
- Author or team clustering should be audited before reusing the visualization design.

## Links

- [L-ratio outcome battery](../methods/l_ratio_outcome_battery.md)
- [Lead-role ratio](../measures/lead_role_ratio.md)
- [Team hierarchy and flatness](../mechanisms/team_hierarchy_flatness.md)
- [Same-size team hierarchy contrast](same_size_team_hierarchy_contrast.md)
- [Novelty robustness specification sweep](novelty_robustness_specification_sweep.md)
- [Disruption variant robustness grid](disruption_variant_robustness_grid.md)

## References

- Xu, F., Wu, L., & Evans, J. A. (2022). Flat teams drive scientific innovation. *Proceedings of the National Academy of Sciences*, 119(23), e2200927119. https://doi.org/10.1073/pnas.2200927119 [OpenAlex: W4226148732; Dimensions: pub.1148413764; WoS: unknown]

## Metadata

- Concept ID: `bootstrapped_l_ratio_response_curves`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Xu et al. (2022) (2022)
- Latest seen paper: Xu et al. (2022) (2022)
- Primary reference DOI: `10.1073/pnas.2200927119`
- OpenAlex ID: `W4226148732`
- Dimensions ID: `pub.1148413764`
- SciSciNet ID: `W4226148732`
- Aliases: L-ratio uncertainty curves; bootstrapped flatness gradients; hierarchy response envelopes
