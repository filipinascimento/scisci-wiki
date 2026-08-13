# Author database linkage extension

## Summary

Links standardized author tables to other author-centered datasets for meta-research evaluation.

## Canonical Form

- Unit of analysis: author identifier crosswalk across bibliometric or administrative databases.
- Typical representation: linked author table with identifiers, confidence tiers, and provenance.
- Method target: extension of author metric databases through linkage to external author data.
- Empirical signature: linked resources support analyses not possible in either dataset alone.

## Uses in Science of Science

- Connects [standardized author citation database](../datasets/standardized_author_citation_database.md) to [scholarly identifier spine](../representations/scholarly_identifier_spine.md) designs.
- Useful for linking author metrics to funding, affiliations, demographics, patents, ORCID, or career-history data.
- Requires explicit [author name disambiguation](author_name_disambiguation.md) validation.

## Operationalization

- Build crosswalks using ORCID, Scopus/OpenAlex IDs, name-affiliation histories, and confidence tiers.
- Validate linkage precision and recall on sampled authors and hard cases.
- Record licensing constraints and whether linked outputs can be redistributed.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) says linkage to other author-based databases may enhance future meta-research use.
- This makes linkage a forward-looking method extension of the standardized author table.

## Caveats

- Linkage can propagate author-disambiguation errors and uneven identifier adoption.
- Provider terms can prevent release of a fully linked table even when code is reproducible.

## Links

- [Author name disambiguation](author_name_disambiguation.md)
- [Scholarly identifier spine](../representations/scholarly_identifier_spine.md)
- [Citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [Source-record correction pathway](../validations/source_record_correction_pathway.md)
- [Standardized author citation database](../datasets/standardized_author_citation_database.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `author_database_linkage_extension`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: author table linkage extension; author metric database crosswalk; linked author metric spine
