# Ratio-metric absolute-impact context

## Summary

Ratio-metric absolute-impact context is the validation rule that ratio indicators should be interpreted alongside the underlying absolute levels because similar ratios can hide very different baselines.

## Canonical Form

- Unit of analysis: ratio metric, patent cohort, citation contrast, country, organization type, field, or technology class.
- Typical representation: ratio plus numerator and denominator means, absolute-count table, or paired ratio-level plot.
- Validation target: avoid treating identical or similar ratios as substantively equivalent when absolute impact differs.
- Empirical signature: two cohorts have similar FCDI or normalized ratios but very different average forward-citation counts.

## Uses in Science of Science

- Adds a reporting guardrail to [forward citation differentiation index](../measures/forward_citation_differentiation_index.md).
- Complements [patent forward-citation value proxy](../measures/patent_forward_citation_value_proxy.md) by requiring absolute citation levels.
- Helps interpret [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md) and [science application impact nonmonotonicity](science_application_impact_nonmonotonicity.md).
- Applies broadly to normalized bibliometric indicators that divide by a benchmark.

## Operationalization

- Report the ratio, numerator mean, denominator mean, numerator count, and denominator count.
- Plot absolute levels beside ratio metrics when comparing countries, fields, organizations, or patent classes.
- Flag ratios based on small denominators or low absolute values.
- Avoid ranking cohorts by ratio alone when the evaluation question concerns total impact, social value, or technological importance.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) defines FCDI as a ratio between average forward citations for science-citing and non-science-citing patents.
- Their country and IPC-class results show that a high ratio can arise from a low non-science-citing baseline as well as from a large science-citing citation level.
- The paper reports both average forward-citation levels and FCDI, allowing readers to separate ratio effects from absolute impact.
- This makes absolute-impact context a necessary companion to science-linkage citation-premium claims.

## Caveats

- Absolute levels are themselves citation indicators and retain citation-window, patent-office, and field-composition biases.
- Ratio and absolute-level evidence answer different questions; neither dominates without a declared evaluation target.
- Very small denominator means can inflate ratios even when both groups have low practical impact.
- Count-weighted and average-impact interpretations should be kept separate.

## Links

- [forward citation differentiation index](../measures/forward_citation_differentiation_index.md)
- [patent forward-citation value proxy](../measures/patent_forward_citation_value_proxy.md)
- [national science-technology linkage gap](../mechanisms/national_science_technology_linkage_gap.md)
- [science application impact nonmonotonicity](science_application_impact_nonmonotonicity.md)
- [dominant-class science-linkage dilution](dominant_class_science_linkage_dilution.md)
- [normalized linkage baseline drift](normalized_linkage_baseline_drift.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [citation-indicator size dependence](../measures/citation_indicator_size_dependence.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology-The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `ratio_metric_absolute_impact_context`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: ratio absolute-level caveat; FCDI absolute context; normalized-ratio level check; citation-premium level context
