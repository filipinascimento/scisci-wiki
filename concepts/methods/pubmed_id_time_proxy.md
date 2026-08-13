# PubMed ID time proxy

## Summary

PubMed ID time proxy is the use of PubMed identifier order as an approximate within-journal publication chronology when exact online publication dates are incomplete or inconsistent.

## Canonical Form

- Unit of analysis: PubMed-indexed paper, journal-specific paper list, PubMed ID, publication date, DOI date token, or citation count.
- Typical representation: sorted PMID sequence, within-journal time rank, chronology proxy, or date-proxy validation check.
- Method target: enable near-age comparisons when publication date metadata are too coarse or unreliable.
- Empirical signature: PubMed ID order correlates with external date or citation-age signals closely enough for same-journal local comparisons.

## Uses in Science of Science

- Supplies the chronological ordering needed by [adjacent-article altmetric sign test](../validations/adjacent_article_altmetric_sign_test.md).
- Provides a practical implementation of [altmetric attention timing windows](altmetric_attention_timing_windows.md) for PubMed-based corpora.
- Helps diagnose [altmetric temporal correlation reversal](../validations/altmetric_temporal_correlation_reversal.md) when exact publication dates are unavailable.
- Generalizes to other identifier-order proxies only after source-specific validation.

## Operationalization

- Sort papers within each journal and source-specific subset by PubMed ID.
- Use immediate neighbors in that sorted order as near-age comparators.
- Validate the proxy against available date tokens, DOI years, citation-age gradients, or electronic publication dates.
- Keep the proxy within journals when possible because indexing practices can differ across journals and fields.
- Report that the proxy is approximate and do sensitivity checks when exact publication dates become available.

## Evidence and Validations

- Verified full-text evidence from Thelwall et al. (2013) orders each journal-source list by PubMed ID because publication year and issue number were not detailed enough and DOI date tokens could refer to submission, acceptance, or publication dates.
- The paper argues that PubMed ID is more fine-grained and universal than the available bibliographic dates, especially for same-journal ordering.
- Thelwall et al. validate the choice by correlating PubMed IDs with citation scores and by cross-checking DOI-extracted years against PubMed ID order.
- They note that electronic publication date would also be logical, making PMID order a practical proxy rather than a conceptual gold standard.

## Caveats

- PubMed ID order can be unreliable across journals because indexing and submission strategies differ.
- It is a weaker proxy for online availability dates, preprints, early access, and article versions.
- The proxy is unsuitable when source events occur before PubMed indexing or when exact event timestamps are required.

## Links

- [adjacent-article altmetric sign test](../validations/adjacent_article_altmetric_sign_test.md)
- [altmetric attention timing windows](altmetric_attention_timing_windows.md)
- [altmetric temporal correlation reversal](../validations/altmetric_temporal_correlation_reversal.md)
- [citation window selection](citation_window_selection.md)
- [publication-level field classification](publication_level_field_classification.md)
- [altmetric-citation association](../validations/altmetric_citation_association.md)
- [social media attention channels](../datasets/social_media_attention_channels.md)

## References

- Thelwall, M., Haustein, S., Lariviere, V., & Sugimoto, C. R. (2013). Do altmetrics work? Twitter and ten other social web services. *PLOS ONE*, 8(5), e64841. https://doi.org/10.1371/journal.pone.0064841 [OpenAlex: W2073023209; Dimensions: pub.1028078949; WoS: unknown]

## Metadata

- Concept ID: `pubmed_id_time_proxy`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Thelwall et al. (2013) (2013)
- Latest seen paper: Thelwall et al. (2013) (2013)
- Primary reference DOI: `10.1371/journal.pone.0064841`
- OpenAlex ID: `W2073023209`
- Dimensions ID: `pub.1028078949`
- SciSciNet ID: `W2073023209`
- Aliases: PMID chronology proxy; PubMed identifier ordering; PubMed time rank; within-journal PMID order
