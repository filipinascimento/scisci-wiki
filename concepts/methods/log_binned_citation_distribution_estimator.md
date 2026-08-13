# Log-binned citation distribution estimator

## Summary

Log-binned citation distribution estimator is the method of estimating sparse citation-count distributions with exponentially widening bins while correcting each bin by its integer citation-count support.

## Canonical Form

- Unit of analysis: citation-count distribution, field-year paper cohort, histogram bin, or normalized citation ratio.
- Typical representation: exponentially growing bins on a log axis, bin counts divided by the number of integer citation values in each bin and then normalized by total papers.
- Method target: make skewed citation distributions visually and numerically comparable across fields without letting wider high-citation bins inflate probability mass.
- Empirical signature: high-citation tails remain visible on log-scale plots while histogram heights remain interpretable as density estimates.

## Uses in Science of Science

- Provides a reproducible estimator for [citation distribution scaling](../measures/citation_distribution_scaling.md).
- Supports [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md) and [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md) by specifying how binned curves are constructed.
- Complements [document-type citation filtering](document_type_citation_filtering.md) and [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md), because distribution estimates inherit denominator choices.
- Helps avoid misleading high-tail plots when citation counts are discrete and heavily skewed.

## Operationalization

- Build the citation-count or normalized-citation sample for a documented field-year cohort.
- Define bins that grow exponentially and are equally spaced on a logarithmic axis.
- For each bin, count papers whose citation count or normalized citation value falls inside the bin.
- Divide the bin count by the number of possible integer citation-count values represented in that bin.
- Divide by the total number of papers so the estimated distribution integrates or sums consistently across bins.
- Report bin boundaries, citation-count support correction, zero-citation handling, and whether the same estimator is used after converting `c` to `c_f`.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) states that citation data were grouped into exponentially growing bins equally spaced on a logarithmic scale.
- Their methods divide the number of articles in each bin by the number of integer citation-count values available in the bin before normalizing by total articles.
- The paper applies the same support-corrected binning logic to normalized `c_f` values, noting that these values remain discrete after dividing integer citations by c0.
- This estimator underlies the empirical curves used for the paper's citation-distribution collapse and lognormal-fit validations.

## Caveats

- Bin choices can change visual impressions of tail thickness and fit quality.
- Support correction makes binned histograms more interpretable but does not solve sparse-tail uncertainty.
- Zero-citation papers need separate treatment because logarithmic binning cannot represent zero on the same axis.
- Density estimates should be paired with sensitivity checks when fields are small or citation windows are short.

## Links

- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md)
- [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md)
- [document-type citation filtering](document_type_citation_filtering.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [citation functional-form diagnostics](../validations/citation_functional_form_diagnostics.md)
- [citation tail sparsity limit](../validations/citation_tail_sparsity_limit.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; SciSciNet: W2151866568; WoS: unknown]

## Metadata

- Concept ID: `log_binned_citation_distribution_estimator`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: support-corrected log binning; exponentially binned citation histogram; log-scale citation density estimator; citation histogram support correction
