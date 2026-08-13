# Field author-publication time series

## Summary

Field author-publication time series are yearly panels of unique authors and papers for a bounded scientific specialty, built to model how fields emerge, grow, saturate, or decline.

## Canonical Form

- Unit of analysis: field, year, author, publication, keyword query, citation seed, or specialty corpus.
- Typical representation: yearly author counts, yearly publication counts, cumulative author counts, cumulative publication counts, and source-query provenance.
- Data target: transform a field definition into a time series suitable for [field population models](../methods/field_population_models.md) and productivity scaling.
- Empirical signature: the same bounded field has comparable yearly trajectories for author entry, paper output, and cumulative participation.

## Uses in Science of Science

- Supplies the empirical data layer for [scientific SEIR contact models](../methods/scientific_seir_contact_model.md), [scientific apprenticeship latency](../measures/scientific_apprenticeship_latency.md), [idea reproductive number](../measures/idea_reproductive_number.md), and [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md).
- Depends on auditable [field query corpus construction](../methods/field_query_corpus_construction.md) before yearly counts are treated as field growth evidence.
- Turns [field emergence](../mechanisms/field_emergence.md) and [research fronts](../mechanisms/research_fronts.md) into longitudinal measurement problems.
- Complements [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md), [science maps](../representations/science_maps.md), and [field classifications](../measures/field_classifications.md) by preserving yearly entry and output.
- Provides a reusable dataset pattern for studying emerging technologies, biomedical topics, and theoretical specialties.

## Operationalization

- Define the field with keyword queries, citation seeds, review articles, controlled vocabulary terms, or expert curation.
- Query bibliographic databases and retain title, author names, publication venue, year, identifiers, and query provenance.
- Deduplicate records, resolve repeated papers, and apply author-name matching.
- Count unique authors and publications by year, with both yearly increments and cumulative totals.
- Store the field-definition rules because small query changes can alter early growth curves.

## Evidence and Validations

- Verified full-text evidence from Bettencourt et al. (2008) constructs databases of authors, papers, and dates from bibliographic searches for six emerging fields.
- The paper reports that results were stored in relational databases after parsing to eliminate repeated records and perform author-name matching.
- Bettencourt et al. extract cumulative and yearly differential numbers of unique authors and publications, then organize them as time series for modeling and statistical analysis.
- Their field queries combine keyword and citation searches, with detailed query definitions reported in an appendix.
- The resulting time series support both epidemic-style field-population fits and publication-author productivity scaling.
- Their query and parsing workflow now supports a split page for field-query corpus construction.

## Caveats

- Query boundaries can create artificial birth dates, growth bursts, or saturation.
- Author-name matching errors affect entry counts, cumulative author pools, and inferred recruitment.
- Bibliographic coverage changes over time can look like field growth.
- Publication counts do not distinguish paper quality, article type, or field-specific publication norms unless additional metadata are joined.

## Links

- [field population models](../methods/field_population_models.md)
- [field query corpus construction](../methods/field_query_corpus_construction.md)
- [scientific SEIR contact model](../methods/scientific_seir_contact_model.md)
- [field emergence](../mechanisms/field_emergence.md)
- [research fronts](../mechanisms/research_fronts.md)
- [topic prevalence dynamics](../methods/topic_prevalence_dynamics.md)
- [science maps](../representations/science_maps.md)
- [field classifications](../measures/field_classifications.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [publication-author scaling exponent](../measures/publication_author_scaling_exponent.md)

## References

- Bettencourt, L. M. A., Kaiser, D. I., Kaur, J., Castillo-Chavez, C., & Wojick, D. E. (2008). Population modeling of the emergence and development of scientific fields. *Scientometrics*, 75, 495-518. https://doi.org/10.1007/s11192-007-1888-4 [OpenAlex: W2143083489; Dimensions: pub.1006988333; WoS: unknown]

## Metadata

- Concept ID: `field_author_publication_time_series`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Bettencourt et al. (2008) (2008)
- Latest seen paper: Bettencourt et al. (2008) (2008)
- Primary reference DOI: `10.1007/s11192-007-1888-4`
- OpenAlex ID: `W2143083489`
- Aliases: field growth time series; author-publication field panel; field emergence bibliographic time series; unique author publication counts
