# Field-year citation baseline c0

## Summary

Field-year citation baseline c0 is the expected citation count used to normalize a paper by comparing it with papers from the same field and publication year.

## Canonical Form

- Unit of analysis: field-year reference set, document-type filtered paper cohort, citation count, or normalized citation denominator.
- Typical representation: `c0`, the average number of citations among comparable papers in a field-year cell.
- Measurement target: field- and age-specific citation opportunity before a focal paper's relative performance is computed.
- Empirical signature: raw citation counts from high-citation and low-citation fields become more comparable after division by their own c0 values.

## Uses in Science of Science

- Provides the denominator for [relative citation performance c_f](relative_citation_performance_cf.md).
- Turns [reference set construction](../methods/reference_set_construction.md) into a concrete numeric baseline for [field-normalized citation impact](field_normalized_citation_impact.md).
- Supplies the expected citation value that can be averaged or aggregated in [mean normalized citation score](mean_normalized_citation_score.md) workflows.
- Anchors distributional validations such as [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md) and [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md).

## Operationalization

- Choose the citation database, census date, field taxonomy, publication year, citation window, and document-type filter.
- Assign each focal paper to a field-year reference set, handling multi-field papers with a declared counting rule.
- Compute c0 as the mean citation count for comparable papers in that reference set.
- Divide each focal paper's citation count by c0 to obtain `c_f = c / c0`.
- Report whether uncited papers enter c0 and run sensitivity checks when zero-citation mass or small cells may move the denominator.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) defines c0 as the average number of citations to articles in the same discipline and year as the focal article.
- The paper uses Web of Science Journal Citation Reports categories and document-type filtering before computing the denominator.
- Radicchi et al. show that c0 differs substantially across disciplines and grows with citation exposure time, making both field and year part of the baseline.
- When raw citations are divided by c0, the resulting `c_f` distributions collapse across selected fields and years, supporting c0 as a practical normalization denominator.

## Caveats

- c0 is a mean, so it can be affected by heavy-tailed citation distributions and extreme papers.
- Narrow field-year cells may be noisy, while broad cells can mix distinct citation cultures.
- The denominator is only as defensible as the source database, field classification, document-type filtering, citation window, and uncited-paper treatment.
- A higher c_f after normalization remains a citation-performance statement, not a universal importance judgment.

## Links

- [relative citation performance c_f](relative_citation_performance_cf.md)
- [field-normalized citation impact](field_normalized_citation_impact.md)
- [mean normalized citation score](mean_normalized_citation_score.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [reference set construction](../methods/reference_set_construction.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)
- [citation window selection](../methods/citation_window_selection.md)
- [universal citation distribution collapse](../validations/universal_citation_distribution_collapse.md)
- [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md)
- [field-balanced top-rank representation](../validations/field_balanced_top_rank_representation.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [relative citation importance-scope caveat](../validations/relative_citation_importance_scope_caveat.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; SciSciNet: W2151866568; WoS: unknown]

## Metadata

- Concept ID: `field_year_citation_baseline_c0`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: c0 citation baseline; field-year average citations; expected field-year citation count; normalization denominator
