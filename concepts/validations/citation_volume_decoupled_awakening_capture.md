# Citation-volume-decoupled awakening capture

## Summary

A delayed-recognition detector should be able to identify sleeping-beauty trajectory shape even when the annual citation peak is not exceptionally large.

## Canonical Form

- Unit of analysis: paper citation trajectory.
- Typical representation: beauty coefficient stratified by peak annual citations or total citations.
- Validation target: trajectory-shape detection separated from sheer citation volume.
- Empirical signature: high delayed-recognition scores remain visible within low- or moderate-citation-volume strata.

## Uses in Science of Science

- Guards [beauty coefficient](../measures/beauty_coefficient.md) interpretation against reducing sleeping beauties to highly cited papers.
- Useful when delayed recognition matters for specialized or smaller fields.
- Connects sleeping-beauty detection to [citation threshold profile](../measures/citation_threshold_profile.md) audits.

## Operationalization

- Compute delayed-recognition scores, total citations, and maximum annual citations for candidate papers.
- Inspect high-score cases within citation-volume strata and compare with low-score high-volume cases.
- Report whether examples depend on a high citation threshold or on the shape of delayed uptake.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) contrasts citation histories with high, low, zero, and negative beauty coefficients and emphasizes that high B does not require extremely high citation values.
- This supports using B as a trajectory-shape score rather than a disguised citation-count measure.

## Caveats

- Low-volume awakenings may be methodologically interesting but substantively narrow.
- Very sparse citation histories can make shape metrics unstable.

## Links

- [Beauty coefficient](../measures/beauty_coefficient.md)
- [Sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [Negative beauty coefficient trajectory class](../measures/negative_beauty_coefficient_trajectory_class.md)
- [Citation threshold profile](../measures/citation_threshold_profile.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `citation_volume_decoupled_awakening_capture`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: low-volume awakening capture; citation-volume-independent sleeping beauty; delayed-recognition shape validation
