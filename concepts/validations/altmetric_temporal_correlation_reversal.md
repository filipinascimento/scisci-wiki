# Altmetric temporal correlation reversal

## Summary

Altmetric temporal correlation reversal is the validation failure in which raw cross-paper correlations between altmetric counts and citations become weak, null, or negative because online attention and citations accumulate on different time scales.

## Canonical Form

- Unit of analysis: paper, source-specific altmetric count, citation count, publication date, provider collection date, or publication-age proxy.
- Typical representation: raw correlation, age-adjusted correlation, partial correlation, matched-age comparison, or sign-test contrast.
- Validation target: distinguish source validity from timing artifacts caused by fast social-media uptake and slow citation accumulation.
- Empirical signature: a source can show positive age-local association with citations while raw cross-age correlations are negative or misleading.

## Uses in Science of Science

- Sharpens [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md) into a specific failure mode.
- Explains why [Twitter mention counts](../measures/twitter_mention_counts.md) and other fast channels need age controls before being used in rankings or discovery systems.
- Supports [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md) and [PubMed ID time proxy](../methods/pubmed_id_time_proxy.md) designs.
- Qualifies [altmetric-citation association](altmetric_citation_association.md) by separating association direction from raw correlation magnitude.

## Operationalization

- Compute raw source-citation correlations and compare them with age-stratified, matched-age, or partial-correlation estimates.
- Check whether publication-date or provider-uptake trends move in the opposite direction from citation accumulation.
- Use near-age comparisons, fixed citation windows, or explicit time proxies before interpreting negative source-citation correlations.
- Report when correlation magnitude is uninterpretable because source uptake and citation delay point in opposite directions.
- Avoid ranking search results by raw altmetric counts without including publication age or exposure time.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) states that newer articles can receive higher altmetric scores while older articles have more time to accrue citations, biasing raw correlations toward negative values.
- The paper's Twitter example shows this directly: raw Twitter-citation correlation is negative, but restricting or partially adjusting for time moves the estimate toward zero while the sign-test evidence still supports a positive age-local association.
- Thelwall et al. warn that even within-year comparisons can remove or reverse the observed positive association between altmetrics and citations.
- They also state that sign-test success/failure magnitudes do not estimate the underlying correlation strength because timing artifacts distort raw correlations.

## Caveats

- Temporal reversal does not prove that altmetrics predict future citations; prediction requires event dates and future citation windows.
- Age adjustment does not solve field, journal, source-list, bot, self-mention, or identifier-matching bias.
- The exact correction depends on source dynamics: Twitter-like streams, blogs, news, reference managers, and policy documents can have different lag structures.

## Links

- [altmetric attention timing windows](../methods/altmetric_attention_timing_windows.md)
- [adjacent-article altmetric sign test](adjacent_article_altmetric_sign_test.md)
- [PubMed ID time proxy](../methods/pubmed_id_time_proxy.md)
- [Twitter mention counts](../measures/twitter_mention_counts.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [altmetric highly cited filtering](altmetric_highly_cited_filtering.md)
- [citation window selection](../methods/citation_window_selection.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `altmetric_temporal_correlation_reversal`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: altmetric time-confounded correlation; Twitter citation reversal; source uptake citation-delay bias; cross-age altmetric artifact
