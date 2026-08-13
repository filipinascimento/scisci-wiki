# Field query corpus construction

## Summary

Field query corpus construction turns a scientific specialty definition into a bibliographic corpus using keyword, citation, review-article, and expert-validated search rules.

## Canonical Form

- Unit of analysis: field definition, query string, citation seed, bibliographic record, author, publication year, or field-year panel.
- Typical representation: documented search rules, deduplicated publication records, author-name matching, yearly author counts, and yearly publication counts.
- Method target: make field emergence studies reproducible by preserving how the corpus was bounded.
- Empirical signature: different search strategies recover comparable core records while excluding obvious false positives.

## Uses in Science of Science

- Supplies the corpus-construction layer for [field author-publication time series](../datasets/field_author_publication_time_series.md).
- Makes [field population models](field_population_models.md), [scientific SEIR contact model](scientific_seir_contact_model.md), and [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md) auditable.
- Complements [field classifications](../measures/field_classifications.md), [topic models](topic_models.md), and [research fronts](../mechanisms/research_fronts.md) when field boundaries are query-defined.
- Helps detect early-period artifacts, such as ambiguous terms or false positives that distort apparent field birth.

## Operationalization

- Define the specialty with domain knowledge, seed papers, review articles, or controlled vocabulary.
- Translate the definition into keyword and citation searches with inclusion and exclusion terms.
- Store title, author names, publication reference, year, and query provenance.
- Deduplicate records, perform author-name matching, and document manual inspections or domain-expert checks.
- Preserve the exact query logic so later agents can update or challenge the field boundary.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) constructs field corpora using SearchPlus over integrated scientific publishing databases.
- The paper stores publication title, author names, publication reference, and publication year in relational databases after removing repeats and matching author names.
- Bettencourt et al. use citation searches for cosmological inflation to avoid overlap with economic inflation.
- They use keyword searches with exclusion terms for topics such as prions and carbon nanotubes to remove irrelevant bird-genus and cellular-nanotubule records.
- The appendix documents field-specific query rules for all six case studies.

## Caveats

- Query boundaries can create apparent takeoff, saturation, or productivity shifts.
- Citation-seed methods can miss independent work outside the seed lineage.
- Keyword methods can overinclude ambiguous terms and underinclude synonym-rich subcommunities.
- Corpus construction needs revalidation when databases, indexing, and terminology change.

## Links

- [field author-publication time series](../datasets/field_author_publication_time_series.md)
- [field population models](field_population_models.md)
- [scientific SEIR contact model](scientific_seir_contact_model.md)
- [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md)
- [field classifications](../measures/field_classifications.md)
- [topic models](topic_models.md)
- [research fronts](../mechanisms/research_fronts.md)
- [author name disambiguation](author_name_disambiguation.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown; SciSciNet: W2143083489]

## Metadata

- Concept ID: `field_query_corpus_construction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Dimensions ID: `pub.1006988333`
- SciSciNet ID: `W2143083489`
- Aliases: field search-query construction; specialty corpus query design; keyword-citation field corpus; field boundary query provenance
