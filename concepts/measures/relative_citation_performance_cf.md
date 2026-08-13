# Relative citation performance c_f

## Summary

Relative citation performance c_f is a paper-level normalized citation indicator defined as a paper's citation count divided by the average citation count for papers in the same field and publication year.

## Canonical Form

- Unit of analysis: paper, field-year reference set, citation count, or normalized citation score.
- Typical representation: c_f = c / c0, where c is observed citations and c0 is the field-year average.
- Measurement target: relative impact of one paper compared with papers exposed to similar field and age citation conditions.
- Empirical signature: a c_f value above one means the paper is cited above its field-year average under the chosen reference set.

## Uses in Science of Science

- Provides a concrete paper-level building block for [field-normalized citation impact](field_normalized_citation_impact.md).
- Uses [field-year citation baseline c0](field_year_citation_baseline_c0.md) as the explicit denominator for each reference-set ratio.
- Bridges [citation distribution scaling](citation_distribution_scaling.md) to portfolio indicators such as [mean normalized citation score](mean_normalized_citation_score.md).
- Supports cross-field ranking checks through [field-balanced top-rank representation](../validations/field_balanced_top_rank_representation.md).
- Supplies the citation side of the [field-normalized h-index](field_normalized_h_index.md).

## Operationalization

- Choose a database, citation census date, document types, field taxonomy, and publication year.
- For each field-year cell, compute c0 as the average number of citations among comparable papers.
- Divide each focal paper's observed citation count c by c0.
- Report the reference-set definition and whether uncited papers are included in c0.
- Compare the c_f distribution across fields as a validation before using the score for evaluation.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) defines c_f = c/c0, where c0 is the average citation count of papers in the same discipline and publication year.
- The paper shows that raw citation counts vary strongly across disciplines, while c_f distributions collapse onto a common curve for the selected fields.
- Radicchi et al. interpret c_f as relative citation performance and argue that it is an unbiased indicator for comparing single-publication impact across fields and years.
- The paper notes that c_f is an item-oriented field-normalized citation score, analogous to single-publication versions of field-normalized citation-score families.
- The same full text supports [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md) as a distributional validation and [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md) as an interpretation guardrail.

## Caveats

- c_f depends on field assignment, document-type filtering, citation-window length, and database coverage.
- A high c_f is not automatically a measure of importance, social value, or quality; see [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md).
- Very narrow fields can yield high c_f values for specialist work that may not be broadly important.

## Links

- [field-normalized citation impact](field_normalized_citation_impact.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [field-year citation baseline c0](field_year_citation_baseline_c0.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [field-normalized h-index](field_normalized_h_index.md)
- [field-balanced top-rank representation](../validations/field_balanced_top_rank_representation.md)
- [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md)
- [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md)
- [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md)
- [reference set construction](../methods/reference_set_construction.md)
- [cited-side normalization](../methods/cited_side_normalization.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [author-count citation normalization test](../methods/author_count_citation_normalization_test.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `relative_citation_performance_cf`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: c_f; c over c0; item-oriented field-normalized citation score; relative citation indicator
