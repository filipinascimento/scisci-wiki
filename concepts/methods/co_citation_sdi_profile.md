# Co-citation SDI profile

## Summary

Co-citation SDI profile is a selective-dissemination method that uses a co-cited core of earlier literature as a reusable profile for a scientific specialty.

## Canonical Form

- Unit of analysis: specialty, co-cited core, user or group interest profile, alerting service, or citation-index update.
- Typical representation: core-paper profile, co-citation cluster, specialty reference signature, or alerting query.
- Mechanism or measurement target: a specialty's shared reference core as a standing filter for newly indexed documents.
- Empirical signature: new papers that cite the specialty core can be surfaced as candidate additions to the specialty literature.

## Uses in Science of Science

- Converts [co-cited core literature](../representations/co_cited_core_literature.md) into a reusable retrieval and monitoring instrument.
- Provides an early citation-based analogue of topic alerts, recommender profiles, and field-watch systems.
- Helps operationalize specialty boundaries when journal labels or keywords are too coarse.
- Supports longitudinal monitoring alongside [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md).

## Operationalization

- Identify a co-cited core for a specialty using [co-citation strength](../measures/co_citation_strength.md).
- Store the core as a specialty profile.
- Screen newly indexed documents for citations to the profile papers or their co-citation neighborhood.
- Periodically refresh the profile as the specialty grows, splits, or declines.

## Evidence and Validations

- Verified full-text evidence from Small (1973) proposes using co-citation to establish a cluster or core of earlier literature for a specialty.
- Small describes that core as a profile for the specialty and as the basis of an SDI system.
- The same paper links this retrieval use to a broader program of observing specialty structure over time.

## Caveats

- A fixed profile can lag behind fast-moving fields if the co-cited core is not refreshed.
- Alerting from a core profile can privilege canonical papers and miss peripheral or emergent work.
- Citation-index coverage and reference-disambiguation errors directly affect profile precision and recall.

## Links

- [co-cited core literature](../representations/co_cited_core_literature.md)
- [co-citation](../representations/co_citation.md)
- [co-citation strength](../measures/co_citation_strength.md)
- [specialty co-citation mapping](specialty_co_citation_mapping.md)
- [temporal co-citation drift](../mechanisms/temporal_co_citation_drift.md)
- [science map update workflows](science_map_update_workflows.md)
- [citation-index alerting service](citation_index_alerting_service.md)
- [research fronts](../mechanisms/research_fronts.md)

## References

- Small, H. (1973). Co-citation in the scientific literature: A new measure of the relationship between two documents. *Journal of the American Society for Information Science*, 24(4), 265-269. https://doi.org/10.1002/asi.4630240406 [OpenAlex: W2005207065; Dimensions: pub.1014058264; WoS: unknown]

## Metadata

- Concept ID: `co_citation_sdi_profile`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Small (1973) (1973)
- Latest seen paper: Small (1973) (1973)
- Primary reference DOI: `10.1002/asi.4630240406`
- OpenAlex ID: `W2005207065`
- Dimensions ID: `pub.1014058264`
- SciSciNet ID: `W2005207065`
- Aliases: co-cited specialty profile; co-citation alert profile; SDI co-citation profile; specialty core alerting profile
