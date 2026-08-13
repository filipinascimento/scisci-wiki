# JSTOR Blackout-Window Time-Series Artifact

## Summary

JSTOR blackout-window time-series artifact is the risk that late-period self-citation changes reflect moving embargo or blackout coverage by field rather than behavioral change.

## Canonical Form

- Unit of analysis: publication year, JSTOR field, self-citation time series, database blackout window, or late-period coverage cell.
- Typical representation: endpoint caveat, blackout-window flag, field-specific coverage artifact, or censored-year exclusion rule.
- Validation target: avoid interpreting database coverage truncation as a change in self-citation behavior.
- Empirical signature: a late-period drop or shift coincides with JSTOR fields whose recent papers are delayed by blackout windows.

## Uses in Science of Science

- Qualifies [JSTOR network dataset](../datasets/jstor_network_dataset.md) time-series analyses.
- Adds a source-specific caveat to [self-citation rates](../measures/self_citation_rates.md) and [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md).
- Provides context for [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md) when confidence intervals are computed over censored recent years.
- Connects to broader [field classification sensitivity](field_classification_sensitivity.md), because blackout windows differ by field.

## Operationalization

- Identify JSTOR blackout or moving-wall rules by journal and field.
- Flag recent publication years where not all eligible papers are visible.
- Compare time-series trends with and without recent censored years.
- Avoid using late-period endpoint drops as behavioral evidence unless field coverage is stable.

## Evidence and Validations

- Verified full-text evidence from King et al. (2017) notes that the sharp post-2006 drop in self-citation rates is likely due to JSTOR blackout windows for certain fields.
- The paper explains that some papers do not appear on JSTOR until five years after publication.
- King et al. connect this coverage timing with field differences in self-citation rates, which can create apparent late-period artifacts in pooled time series.

## Caveats

- The artifact is specific to datasets with moving walls, embargoes, or delayed ingest.
- Removing censored years improves coverage validity but shortens recent trend evidence.
- Field composition and embargo timing can interact, so pooled and field-stratified series should both be inspected.

## Links

- [JSTOR network dataset](../datasets/jstor_network_dataset.md)
- [self-citation rates](../measures/self_citation_rates.md)
- [gendered self-citation gap](../mechanisms/gendered_self_citation_gap.md)
- [self-citation bootstrap ratio intervals](../methods/self_citation_bootstrap_ratio_intervals.md)
- [field classification sensitivity](field_classification_sensitivity.md)
- [citation data census dates](../methods/citation_data_census_dates.md)

## References

- King, M. M., Bergstrom, C. T., Correll, S. J., Jacquet, J., & West, J. D. (2017). Men set their own cites high: Gender and self-citation across fields and over time. *Socius: Sociological Research for a Dynamic World*, 3, 1-22. https://doi.org/10.1177/2378023117738903 [OpenAlex: W2466144917; Dimensions: pub.1099634910; WoS: unknown; SciSciNet: W3104836124]

## Metadata

- Concept ID: `jstor_blackout_window_time_series_artifact`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: King et al. (2017) (2017)
- Latest seen paper: King et al. (2017) (2017)
- Primary reference DOI: `10.1177/2378023117738903`
- OpenAlex ID: `W2466144917`
- Dimensions ID: `pub.1099634910`
- SciSciNet ID: `W3104836124`
- Aliases: JSTOR blackout artifact; moving-wall self-citation artifact; JSTOR embargo time-series caveat; late-period JSTOR coverage artifact
