# Online-first altmetric timing lag

## Summary

Online-first altmetric timing lag is the validation problem created when a paper appears online before its official issue month, allowing attention and citations to accrue outside the publication date used for cohort construction.

## Canonical Form

- Unit of analysis: paper, DOI, online-first date, official publication month, issue month, mention timestamp, or citation window.
- Typical representation: online-first lag, date mismatch flag, issue-date sensitivity analysis, or pre-window attention audit.
- Validation target: determine whether publication-date metadata misplace early online attention or citation exposure.
- Empirical signature: a paper assigned to an eligible issue month may have been available online before the provider collection window or before the nominal comparison period.

## Uses in Science of Science

- Validates [altmetric publication-month filtering](../methods/altmetric_publication_month_filter.md) and [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md).
- Explains why [altmetric active universe](../methods/altmetric_active_universe.md) can reduce, but not eliminate, timing artifacts.
- Generalizes to citation analyses that use issue dates while papers, preprints, or DOI landing pages circulate earlier.
- Complements [PubMed ID time proxy](../methods/pubmed_id_time_proxy.md) and [citation window selection](../methods/citation_window_selection.md).

## Operationalization

- Store online-first date, issue date, publication month, provider event timestamps, and citation census date when available.
- Flag records where online-first date precedes the official issue month by more than a chosen threshold.
- Recompute altmetric-citation comparisons after excluding or separately modeling likely online-first lag cases.
- Use event timestamps to test whether mentions occurred before the official publication month.
- Report whether date fields come from publisher metadata, Crossref, PubMed, OpenAlex, Dimensions, Web of Science, or provider exports.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) states that papers officially published in July or August 2011 may have appeared online earlier through online-first systems.
- The paper warns that early online availability can create problems for both altmetrics and citations because some attention may have occurred before the July 2011 provider collection cutoff.
- Costas et al. note that July and August papers still show nontrivial altmetric activity, but treat the lag as a limitation and add complementary analyses to reduce its effect.
- This makes online-first lag a date-quality validation, not merely a source-coverage issue.

## Caveats

- Online-first dates are not always available or harmonized across publishers and bibliographic databases.
- Excluding lagged papers can create field and journal selection bias.
- DOI creation, online posting, issue assignment, and indexing dates can all differ.
- The problem applies to citations and downloads as well as altmetrics.

## Links

- [altmetric publication-month filter](../methods/altmetric_publication_month_filter.md)
- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [altmetric active universe](../methods/altmetric_active_universe.md)
- [altmetric zero-score semantics](altmetric_zero_score_semantics.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [citation window selection](../methods/citation_window_selection.md)
- [PubMed ID time proxy](../methods/pubmed_id_time_proxy.md)
- [altmetric provider snapshot provenance](../datasets/altmetric_provider_snapshot_provenance.md)
- [altmetrics](../datasets/altmetrics.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; WoS: unknown]

## Metadata

- Concept ID: `online_first_altmetric_timing_lag`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: online-first date lag; issue-month timing bias; early online availability bias; pre-window altmetric attention
