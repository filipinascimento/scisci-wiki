# Paper-first normalization before aggregation

## Summary

Paper-first normalization before aggregation is the method of normalizing each publication's impact against its field-year baseline before aggregating scores to authors, groups, departments, or institutions.

## Canonical Form

- Unit of analysis: publication first, then author, group, institution, or field aggregate.
- Typical representation: normalized paper-level score aggregated upward by mean, sum, percentile share, or rank.
- Method target: avoid raw-citation field bias when comparing larger units.
- Empirical signature: aggregation occurs after article-level normalization, not before.

## Uses in Science of Science

- Bridges [relative citation performance c_f](../measures/relative_citation_performance_cf.md) and [mean normalized citation score](../measures/mean_normalized_citation_score.md).
- Reinforces [field-normalized citation impact](../measures/field_normalized_citation_impact.md).
- Clarifies the unit order behind cross-field author or institution comparisons.
- Helps avoid mixing raw high-density fields with low-density fields in aggregate metrics.

## Operationalization

- Assign each paper to a field-year reference set.
- Divide or otherwise transform each paper's citation count relative to the field-year baseline.
- Aggregate normalized paper scores to the target unit.
- Report the aggregation rule and whether fractional authorship, document type, or citation window adjustments are used.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) argues that scientific impact can be compared after normalizing at the publication level.
- The paper extends article-level normalization to authors by aggregating normalized paper performance.
- This supports the paper-first ordering as a general method for multi-level evaluation.

## Caveats

- Paper-level field assignment can be ambiguous for interdisciplinary work.
- Aggregation choices can still change rankings after normalization.
- Normalizing first does not solve author contribution, collaboration size, or career-stage differences.

## Links

- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [reference set construction](reference_set_construction.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; SciSciNet: W2151866568]

## Metadata

- Concept ID: `paper_first_normalization_before_aggregation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: publication-first normalization; article-level normalization before aggregation; normalize then aggregate; paper-level field normalization
