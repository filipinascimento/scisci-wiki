# PubMed-indexed RCR eligibility boundary

## Summary

The public iCite/RCR lookup universe is PubMed-indexed biomedical articles rather than all scholarly literature.

## Canonical Form

- Unit of analysis: PubMed article, PMID, iCite lookup record, biomedical article, or citation-source record.
- Typical representation: eligibility boundary keyed to PubMed indexing plus citation-source availability.
- Mechanism, measurement, or validation target: coverage scope of RCR as a public article-level metric.
- Empirical signature: articles without PubMed indexing or required citation-source coverage cannot be retrieved or interpreted through the same RCR workflow.

## Uses in Science of Science

- Refines RCR dataset scope by linking it to [icite rcr tool](icite_rcr_tool.md) and [web of science](web_of_science.md).
- Useful as a reusable check when [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md) is used in science-of-science inference.
- Creates cross-links to [publication spine findability ceiling](../validations/publication_spine_findability_ceiling.md) so the motif is not interpreted in isolation.

## Operationalization

- Require PubMed indexing for public iCite lookup and record PMID availability separately from PMCID.
- Distinguish PubMed eligibility from WoS citation-source availability and NIH benchmark restrictions.
- Report biomedical-domain coverage limits before extending RCR claims to other scholarly fields.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) states that iCite calculates RCR for PubMed-listed articles and frames the application around biomedical research.
- The paper does not define a PMC eligibility rule, so PubMed indexing is the relevant boundary.

## Caveats

- PubMed coverage is not field-universal and can bias cross-domain use.
- PMID eligibility, WoS citation coverage, and NIH benchmark membership are different filters.

## Links

- [iCite RCR tool](icite_rcr_tool.md)
- [Web of Science](web_of_science.md)
- [Citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [Publication-spine findability ceiling](../validations/publication_spine_findability_ceiling.md)
- [PubMed-WoS altmetric citation crosswalk](../methods/pubmed_wos_altmetric_citation_crosswalk.md)
- [RCR citation-snapshot exclusion boundary](../validations/rcr_citation_snapshot_exclusion_boundary.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]

## Metadata

- Concept ID: `pubmed_indexed_rcr_eligibility_boundary`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: PubMed RCR coverage; PMID eligibility boundary; biomedical article lookup universe
