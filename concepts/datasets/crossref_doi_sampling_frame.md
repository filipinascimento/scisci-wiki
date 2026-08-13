# Crossref DOI sampling frame

## Summary

Crossref DOI sampling frame uses Crossref DOI metadata, usually filtered to journal articles, as an open bibliographic denominator for large-scale studies of scholarly communication.

## Canonical Form

- Unit of analysis: DOI, Crossref work record, journal article, sampled bibliographic item, or DOI-bearing corpus.
- Typical representation: DOI list, Crossref type filter, publication year, publisher, title metadata, and sample draw.
- Data target: construct a reproducible article universe without relying only on subscription indexes.
- Empirical signature: estimates are reported as applying to DOI-assigned journal articles, not to every scholarly output.

## Uses in Science of Science

- Provides a denominator for [open access prevalence measurement](../measures/open_access_prevalence_measurement.md) and [open access status](open_access_status.md).
- Supplies DOI-normalized records to [open access resolver workflows](../methods/open_access_resolver_workflows.md) and [OA resolver source fusion](../methods/oa_resolver_source_fusion.md).
- Connects to broader [scholarly identifier spine](../representations/scholarly_identifier_spine.md) design because DOI coverage determines what can be joined across Crossref, [OpenAlex](openalex.md), [Dimensions](dimensions.md), Web of Science, and resolver outputs.
- Makes [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md) explicit instead of hiding it inside downstream access or impact measures.

## Operationalization

- Query Crossref or a Crossref-derived snapshot for records with DOI identifiers.
- Restrict to a declared document type, such as `journal-article`, when estimating article-level prevalence.
- Draw a random sample, stratified sample, or complete slice from the DOI universe.
- Validate document-type metadata on a small manual sample when the document-type filter is central to the estimate.
- Record the Crossref snapshot date and any exclusions for books, datasets, front matter, editorials, or other non-article outputs.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) defines a Crossref-DOI sample as 100,000 randomly sampled journal articles with Crossref DOIs across all publication years.
- The paper reports about 88 million Crossref DOIs in May 2017 and about 66 million Crossref records with `journal-article` type after excluding books, datasets, and other non-article content.
- Piwowar et al. manually checked 150 sampled `journal-article` records and found that 93% were journal articles, with the rest mostly front matter such as tables of contents or instructions to authors.
- The Crossref denominator is used for broad OA prevalence, while Web of Science DOI records are used for discipline and citation analyses where Crossref metadata was incomplete.
- The paper notes that Crossref is more open for replication than subscription-access indexes, while still incomplete for fields, regions, and older literature with lower DOI assignment.

## Caveats

- A Crossref DOI universe is not the whole scholarly literature.
- DOI availability varies by field, region, publication year, publisher, and document type.
- Crossref metadata can contain non-article records even after type filtering.
- Crossref citation and discipline metadata may be insufficient for field-normalized impact studies without enrichment from OpenAlex, Dimensions, Web of Science, or other sources.

## Links

- [open access status](open_access_status.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [Unpaywall reader-demand sample](unpaywall_reader_demand_sample.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [openalex](openalex.md)
- [dimensions](dimensions.md)
- [web of science](web_of_science.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `crossref_doi_sampling_frame`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: Crossref DOI sample; DOI-assigned article universe; Crossref journal-article denominator; DOI sampling frame
